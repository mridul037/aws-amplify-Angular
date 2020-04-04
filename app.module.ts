import { BrowserModule } from "@angular/platform-browser";
import { NgModule, ErrorHandler } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { SharedModule } from "./shared/shared.module";
import { ProductService } from "./product/product.service";
import { HttpClientModule } from "@angular/common/http";
import { ScrollingModule } from "@angular/cdk/scrolling";
import { InfiniteScrollModule } from "ngx-infinite-scroll";
import { PersonalInfoComponent } from "./personal-info/personal-info.component";
import { NavbarModule } from "./navbar/navbar.module";
import { ErrorService } from "./shared/asyncServices/http.service";
import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { ErrorInterceptor } from "./shared/asyncServices/http-response-handle.service";

/**export class MyErrorHandler implements ErrorHandler {
	constructor() {}
	handleError(error: Error) {
		if (Error) {
			console.log("Error occurred!!!");
		}
	}
}*/

@NgModule({
	declarations: [AppComponent, PersonalInfoComponent],
	imports: [
		BrowserModule,
		HttpClientModule,
		AppRoutingModule,
		BrowserAnimationsModule,
		SharedModule,
		ScrollingModule,
		InfiniteScrollModule,
		NavbarModule,
	],
	providers: [
		ProductService,
		//{
		//provide: ErrorHandler,
		//useClass: MyErrorHandler,
		//},
	],
	bootstrap: [AppComponent],
})
export class AppModule {}
