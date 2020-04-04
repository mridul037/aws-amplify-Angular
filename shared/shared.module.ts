import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FlexLayoutModule } from "@angular/flex-layout";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import {
	MatExpansionModule,
	MatAccordion,
	MatExpansionPanelTitle,
} from "@angular/material/expansion";

import {
	MatFormFieldModule,
	MatBottomSheetModule,
	MatButtonModule,
	MatCardModule,
	MatCheckboxModule,
	MatDialogModule,
	MatDividerModule,
	MatInputModule,
	MatMenuModule,
	MatProgressSpinnerModule,
	MatRadioModule,
	MatRippleModule,
	MatSelectModule,
	MatSidenavModule,
	MatSnackBarModule,
	MatStepperModule,
	MatTabsModule,
	MatToolbarModule,
	MatAutocompleteModule,
	MatIconModule,
	MatChipsModule,
} from "@angular/material";
import { StyleSelectionComponent } from "./components/style-selection/style-selection.component";
import { OffersComponent } from "./components/offers/offers.component";
import { LazyLoadImageModule } from "ng-lazyload-image";
import { LoaderComponent } from "./components/loader/loader.component";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { LoaderInterceptorService } from "../loader-interceptor.service";
import { ErrorInterceptor } from "./asyncServices/http-response-handle.service";
import { FormatTimePipe } from "./pipe/format-time.pipe";
@NgModule({
	declarations: [
		StyleSelectionComponent,
		OffersComponent,
		LoaderComponent,
		FormatTimePipe,
	],
	imports: [
		// MatAccordion,
		MatChipsModule,
		MatExpansionModule,
		MatFormFieldModule,
		CommonModule,
		FlexLayoutModule,
		MatStepperModule,
		MatInputModule,
		MatSelectModule,
		MatCardModule,
		MatTabsModule,
		MatButtonModule,
		MatSelectModule,
		MatDividerModule,
		MatRippleModule,
		MatSidenavModule,
		MatSelectModule,
		MatDialogModule,
		MatToolbarModule,
		MatCheckboxModule,
		MatMenuModule,
		MatBottomSheetModule,
		MatRadioModule,
		MatProgressSpinnerModule,
		MatSnackBarModule,
		MatSelectModule,
		MatAutocompleteModule,
		MatIconModule,
		LazyLoadImageModule,
		HttpClientModule,
	],
	exports: [
		MatChipsModule,
		MatAccordion,
		MatExpansionPanelTitle,
		MatExpansionModule,
		MatFormFieldModule,
		FlexLayoutModule,
		MatCardModule,
		MatTabsModule,
		MatStepperModule,
		MatInputModule,
		MatSelectModule,
		MatButtonModule,
		MatDialogModule,
		MatSelectModule,
		MatDividerModule,
		MatSelectModule,
		MatSelectModule,
		MatSidenavModule,
		MatToolbarModule,
		MatCheckboxModule,
		MatMenuModule,
		MatRippleModule,
		MatBottomSheetModule,
		MatRadioModule,
		MatProgressSpinnerModule,
		MatSnackBarModule,
		MatAutocompleteModule,
		MatIconModule,
		StyleSelectionComponent,
		OffersComponent,
		LazyLoadImageModule,
		LoaderComponent,
		ReactiveFormsModule,
		FormsModule,
		FormatTimePipe,
	],
	providers: [
		{
			provide: HTTP_INTERCEPTORS,
			useClass: ErrorInterceptor,
			multi: true,
		},
		{
			provide: HTTP_INTERCEPTORS,
			useClass: LoaderInterceptorService,
			multi: true,
		},
	],
})
export class SharedModule {}
