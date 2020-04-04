import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { SignUpComponent } from "./sign-up/sign-up.component";
import { SignOutComponent } from "./sign-out/sign-out.component";

import { IsAuthenticated, IsNotAuthenticated } from "../../auth.guard";
import { OtpComponent } from "./otp/otp.component";
const routes: Routes = [
	{
		path: "sign-up",
		component: SignUpComponent,
		canActivate: [IsNotAuthenticated],
	},
	{
		path: "sign-out",
		component: SignOutComponent,
		canActivate: [IsAuthenticated],
	},

	{ path: "", redirectTo: "/auth/sign-up", pathMatch: "full" },
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class AuthenticationRoutingModule {}
