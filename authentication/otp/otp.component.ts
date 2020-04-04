import {
	Component,
	OnInit,
	OnDestroy,
	AfterContentInit,
	ChangeDetectionStrategy,
	ViewChild,
	ElementRef,
	Input,
} from "@angular/core";

import { Router } from "@angular/router";
import { FormControl } from "@angular/forms";
import { AuthService } from "../../../auth.service";
import { BehaviorSubject, Subscription, Observable, of, timer } from "rxjs";
import { tap, map, take } from "rxjs/operators";
import { ErrorService } from "../../shared/asyncServices/http.service";

const THOUSAND_MILLISECONDS = 1000;
const endtime = 60000;
const TIMEOUT_SECONDS = 7;
@Component({
	selector: "app-otp",
	templateUrl: "./otp.component.html",
	styleUrls: ["./otp.component.scss"],
})
export class OtpComponent implements OnInit, OnDestroy, AfterContentInit {
	@Input() no: string;
	digit1 = new FormControl("");
	digit2 = new FormControl("");
	digit3 = new FormControl("");
	digit4 = new FormControl("");
	digit5 = new FormControl("");
	digit6 = new FormControl("");
	@ViewChild("digit1el", { static: false }) digit1element: ElementRef;
	@ViewChild("digit2el", { static: false }) digit2element: ElementRef;
	@ViewChild("digit3el", { static: false }) digit3element: ElementRef;
	@ViewChild("digit4el", { static: false }) digit4element: ElementRef;
	@ViewChild("digit5el", { static: false }) digit5element: ElementRef;
	@ViewChild("digit6el", { static: false }) digit6element: ElementRef;
	@ViewChild("time", { static: false }) time: ElementRef;
	private errorMessage_ = new BehaviorSubject("");
	public errorMessage = this.errorMessage_.asObservable();

	private busy_ = new BehaviorSubject(false);
	public busy = this.busy_.asObservable();

	private timeoutRef = 0;
	private allSubscriptions = new Subscription();
	public item: string;
	private sms_ = new BehaviorSubject("");
	public sms = this.sms_.asObservable();
	public resendOtpCountDown$: Observable<number>;
	public callDuration;
	constructor(
		private auth: AuthService,
		private router: Router,
		private errorService: ErrorService
	) {
		this.resendOtpCountDown$ = of();
	}

	ngOnInit() {
		this.resendOtpTimer(endtime);

		this.auth
			.getPublicChallengeParameters()
			.then(param => this.sms_.next(param.sms));

		// Move focus to next field upon entry of a digit
		[2, 3, 4, 5, 6].forEach(digit => {
			const prev = this[`digit${digit - 1}`] as FormControl;
			const next = this[`digit${digit}element`] as ElementRef;
			this.allSubscriptions.add(
				prev.valueChanges
					.pipe(
						tap(() => {
							if (prev.value) {
								next.nativeElement.focus();
								next.nativeElement.setSelectionRange(0, 1);
							}
						})
					)
					.subscribe()
			);
		});

		// If the user copy pastes the code into the first digit field
		// we'll be so kind to cut it in 6 pieces and distribute it to the right fields
		this.allSubscriptions.add(
			this.digit1.valueChanges
				.pipe(
					tap(value => {
						if (value && value.length > 1) {
							const digits = value.split("").slice(0, 6);
							this.digit1.setValue(digits[0]);
							this.digit2.setValue(digits[1]);
							this.digit3.setValue(digits[2]);
							this.digit4.setValue(digits[3]);
							this.digit5.setValue(digits[4]);
							this.digit6.setValue(digits[5]);
						}
					})
				)
				.subscribe()
		);
	}

	ngOnDestroy() {
		this.allSubscriptions.unsubscribe();
	}

	ngAfterContentInit() {
		this.digit1element.nativeElement.focus();
	}

	public async submit() {
		try {
			this.errorMessage_.next("");
			this.busy_.next(true);
			const answer = [1, 2, 3, 4, 5, 6]
				.map(digit => (this[`digit${digit}`] as FormControl).value)
				.join("");
			const loginSucceeded = await this.auth.answerCustomChallenge(
				answer
			);
			if (loginSucceeded) {
				this.errorService.HandleToken();
				this.router.navigate(["/cp"]);
			} else {
				this.errorMessage_.next("That's not the right code");
			}
		} catch (err) {
			this.errorMessage_.next(err.message || err);
		} finally {
			this.busy_.next(false);
		}
	}
	onKey(event, digit) {
		const s = this[`digit${digit + 1}element`] as ElementRef;
		if (event.target.value.length === 1) {
			s.nativeElement.focus();
		}
	}
	private resendOtpTimer(endTimeout) {
		const endTime = Math.floor(
			(new Date().getTime() + endTimeout) / THOUSAND_MILLISECONDS
		);
		const presentTime = Math.floor(
			new Date().getTime() / THOUSAND_MILLISECONDS
		);

		const timeGap = endTime - presentTime > 0 ? endTime - presentTime : 0;

		this.resendOtpCountDown$ = timer(0, THOUSAND_MILLISECONDS).pipe(
			map(second => timeGap - second),
			take(timeGap + 1)
		);
	}

	public async resend() {
		try {
			await this.auth.signIn(`+91${this.no}`);
			this.resendOtpTimer(endtime);
		} catch (err) {
			try {
				await this.auth.signUp(`+91${this.no}`, "");
				await this.auth.signIn(`+91${this.no}`);
				this.resendOtpTimer(endtime);
			} catch (err) {
				this.errorMessage_.next(err.message || err);
			}
		}
	}
}
