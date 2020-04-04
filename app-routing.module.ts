import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
	{
		path: "",
		loadChildren: "./categories/categories.module#CategoriesModule",
	},
	{
		path: "lp",
		loadChildren: "./listing/listing.module#ListingModule",
	},
	{
		path: "product",
		loadChildren: "./product/product.module#ProductModule",
	},
	{
		path: "dp",
		loadChildren: "./details/details.module#DetailsModule",
	},
	{
		path: "bp",
		loadChildren: "./bag/bag.module#BagModule",
	},
	{
		path: "cp",
		loadChildren: "./categories/categories.module#CategoriesModule",
	},
	{
		path: "address",
		loadChildren: "./Account/address/address.module#AddressModule",
	},
	{
		path: "osp",
		loadChildren: "./ordersummary/order-summary.module#OrderSummaryModule",
	},
	{
		path: "pc",
		loadChildren:
			"./categories/parent-category/parent-category.module#ParentCategoryModule",
	},
	{
		path: "coupons",
		loadChildren: "./coupons/coupons.module#CouponsModule",
	},
	{
		path: "pp",
		loadChildren: "./payment/payment.module#PaymentModule",
	},
	{
		path: "myorders",
		loadChildren: "./myorders/myorders.module#MyOrdersModule",
	},
	{
		path: "wishlist",
		loadChildren: "./Account/wishlist/wishlist.module#WishlistModule",
	},
	{
		path: "notifications",
		loadChildren:
			"./Account/notification/notification.module#NotificationModule",
	},
	{
		path: "support",
		loadChildren: "./Account/support/support.module#SupportModule",
	},
	{
		path: "ma",
		loadChildren: "./my-account/my-account.module#MyAccountModule",
	},
	{
		path: "cs",
		loadChildren: "./Account/contactus/contactus.module#ContactusModule",
	},
	{
		path: "myordersummary",
		loadChildren:
			"./Account/order-summary/order-summary.module#OrderSummaryModule",
	},
	{
		path: "choose-brand",
		loadChildren: "./choose-brand/choose-brand.module#ChooseBrandModule",
	},
	{
		path: "auth",
		loadChildren:
			"./authentication/authentication.module#AuthenticationModule",
	},
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
