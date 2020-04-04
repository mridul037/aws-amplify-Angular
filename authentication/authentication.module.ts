import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { SignUpComponent } from "./sign-up/sign-up.component";
import { SignOutComponent } from "./sign-out/sign-out.component";

import { AuthenticationRoutingModule } from "./authentication-routing.module";
import { SharedModule } from "../shared/shared.module";
import { OtpComponent } from "./otp/otp.component";
@NgModule({
	declarations: [SignUpComponent, SignOutComponent, OtpComponent],
	imports: [CommonModule, AuthenticationRoutingModule, SharedModule],
})
export class AuthenticationModule {}
