// import { HttpErrorResponse, HttpRequest } from "@angular/common/http";
// import { Injectable } from "@angular/core";
// import { Router } from "@angular/router";
// import { Observable, throwError as observableThrowError } from "rxjs";

// @Injectable({
// 	providedIn: "root",
// })
// export class HttpResponseHandleService {
//     constructor(private router: Router) {}

// public onCatch(
//     response: HttpErrorResponse,
//     source: Observable<HttpRequest<string>>
// ): any {
//     this.handleUnauthorized();
//     }
//     private handleUnauthorized(): void {
// 		this.router.navigate(["/auth"]);
//     }

// }

import { Observable, throwError } from "rxjs";
import {
	HttpErrorResponse,
	HttpEvent,
	HttpHandler,
	HttpInterceptor,
	HttpRequest,
} from "@angular/common/http";
import { Router } from "@angular/router";
import { Injectable } from "@angular/core";
import { catchError } from "rxjs/operators";
import { ErrorService } from "./http.service";
import { ActivatedRoute } from "@angular/router";
import { AuthService } from "../../../auth.service";
@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
	constructor(
		private router: Router,
		public errorService: ErrorService,
		private _route: ActivatedRoute,
		private authService: AuthService
	) {
		console.log("fff");
		// console.log(this._route.routeConfig.path);
	}

	intercept(
		req: HttpRequest<any>,
		next: HttpHandler
	): Observable<HttpEvent<any>> {
		if (!this.authService.isAuthenticated()) {
			this.authService.Refresh();
		}
		let token = localStorage.getItem("access");

		let access_token = localStorage.getItem(`${token}`);

		if (access_token) {
			req = req.clone({
				headers: req.headers.set(
					"Authorization",
					"Bearer " + access_token
				),
			});
			return next.handle(req);
		}

		return next.handle(req).pipe(
			catchError((err: HttpErrorResponse) => {
				if (err.status == 401) {
					this.savingRoute(this.router.url);
					this.onEnd();
					console.log("interceptor");
				} else {
					return throwError(err);
				}
			})
		);
	}
	private savingRoute(url) {
		this.errorService.onSave(url);
	}
	private onEnd(): void {
		this.router.navigate(["/auth"]);
	}
}
