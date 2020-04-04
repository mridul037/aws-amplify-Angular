import { Injectable } from "@angular/core";
import { Subject, Observable } from "rxjs";
import { Router } from "@angular/router";
@Injectable({
	providedIn: "root",
})
export class ErrorService {
	public access_token: string = null;
	public phone_number: String;
	public url;
	constructor(public router: Router) {
		console.log("service");
	}

	onSave(x): void {
		this.url = x;
	}
	// onTo() {
	//   this.router.navigate([`${this.url}`]);
	// }
	storeSmS(val): void {
		this.phone_number = val;
	}
	HandleToken(): void {
		this.access_token = `CognitoIdentityServiceProvider.1k884cupjl4i4akudt7gsl6l1p.${this.phone_number}.accessToken`;
		localStorage.setItem("access", this.access_token);
	}
}
