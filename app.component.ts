import { Component, ViewEncapsulation } from "@angular/core";
import { Router } from "@angular/router";

@Component({
	selector: "app-root",
	templateUrl: "./app.component.html",
	styleUrls: ["./app.component.scss"],
	encapsulation: ViewEncapsulation.None,
})
export class AppComponent {
	constructor(private _router: Router) {}

	// 	data = {
	// 		comment: "Listing Page Header API",

	// 		styles: [
	// 			{
	// 				active: true,
	// 				image:
	// 					"https://ik.imagekit.io/dailyobjects/assets/images/product-page/filters/cases/glass-case.png?tr=f-png",
	// 				title: "Glass",
	// 				link: "",
	// 			},
	// 			{
	// 				active: false,
	// 				image:
	// 					"https://ik.imagekit.io/dailyobjects/assets/images/product-page/filters/cases/clear-case.png?tr=f-png",
	// 				title: "Clear Glass",
	// 				link: "",
	// 			},
	// 			{
	// 				active: false,
	// 				image:
	// 					"https://ik.imagekit.io/dailyobjects/assets/images/product-page/filters/cases/holographic-glass-case.png?tr=f-png",
	// 				title: "Holographic glsee",
	// 				link: "",
	// 			},
	// 			{
	// 				active: false,
	// 				image:
	// 					"https://ik.imagekit.io/dailyobjects/assets/images/product-page/filters/cases/mirror-case.png?tr=f-png",
	// 				title: "Crystal Mirror",
	// 				link: "",
	// 			},
	// 			{
	// 				active: false,
	// 				image:
	// 					"https://ik.imagekit.io/dailyobjects/assets/images/product-page/filters/cases/leather-wallet-case.png?tr=f-png",
	// 				title: "Leather Wallet",
	// 				link: "",
	// 			},
	// 			{
	// 				active: false,
	// 				image:
	// 					"https://ik.imagekit.io/dailyobjects/assets/images/product-page/filters/cases/slim-case.png?tr=f-png",
	// 				title: "Slim Case",
	// 				link: "",
	// 			},
	// 		],
	// 	};

	// 	listingProductData = {
	// 		feed: [
	// 			{
	// 				layout: "<2-col-img (not sure) or 1-col-img >",
	// 				image:
	// 					"https://ik.imagekit.io/dailyobjects/product-images/designer-cases/oppo/oppo-reno-2f/dailyobjects-sky-gradient-glass-case-cover-for-oppo-reno-2f-images/DailyObjects-Sky-Gradient-Glass-Case-Cover-For-Oppo-Reno-2F.png",
	// 				title: "Sky Gradient Glass Case Cover For Oppo Reno 2F",
	// 				subtitle: "BUY 2 FOR 2999",
	// 				link: "",
	// 				price: "899",
	// 				mrp: "1099",
	// 				overlayText: "NEW!",
	// 				wishlist: {
	// 					link: "asdfksd",
	// 					wished: true,
	// 				},
	// 			},
	// 			{
	// 				layout: "<2-col-img (not sure) or 1-col-img >",
	// 				image:
	// 					"https://ik.imagekit.io/dailyobjects/product-images/designer-goods/dailyobjects/carry-all-pouches/dailyobjects-green-felt-carry-all-pouch-medium-images/DailyObjects-Green-Felt-Carry-all-Pouch-Medium.png?tr=w-476,q-80",
	// 				title: "Sky Gradient Glass Case Cover For Oppo Reno 2F",
	// 				subtitle: "BUY 2 FOR 2999",
	// 				link: "",
	// 				price: "899",
	// 				mrp: "1099",
	// 				overlayText: "NEW",
	// 				wishlist: {
	// 					link: "asdfksd",
	// 					wished: true,
	// 				},
	// 			},
	// 			{
	// 				layout: "<2-col-img (not sure) or 1-col-img >",
	// 				image:
	// 					"https://ik.imagekit.io/dailyobjects/product-images/designer-cases/oppo/oppo-reno-2f/dailyobjects-sky-gradient-glass-case-cover-for-oppo-reno-2f-images/DailyObjects-Sky-Gradient-Glass-Case-Cover-For-Oppo-Reno-2F.png",
	// 				title: "Sky Gradient Glass Case Cover For Oppo Reno 2F",
	// 				subtitle: "BUY 2 FOR 2999",
	// 				link: "",
	// 				price: "899",
	// 				mrp: "1099",
	// 				overlayText: "NEW!",
	// 				wishlist: {
	// 					link: "asdfksd",
	// 					wished: true,
	// 				},
	// 			},
	// 			{
	// 				layout: "<2-col-img (not sure) or 1-col-img >",
	// 				image:
	// 					"https://ik.imagekit.io/dailyobjects/product-images/designer-goods/dailyobjects/carry-all-pouches/dailyobjects-green-felt-carry-all-pouch-medium-images/DailyObjects-Green-Felt-Carry-all-Pouch-Medium.png?tr=w-476,q-80",
	// 				title: "Sky Gradient Glass Case Cover For Oppo Reno 2F",
	// 				subtitle: "BUY 2 FOR 2999",
	// 				link: "",
	// 				price: "899",
	// 				mrp: "1099",
	// 				overlayText: "NEW",
	// 				wishlist: {
	// 					link: "asdfksd",
	// 					wished: true,
	// 				},
	// 			},
	// 		],
	// 	};
	// 	productDetailsData = {
	// 		comment: "Product Detail Page",
	// 		data: [
	// 			{
	// 				layout: "carousel",
	// 				images: [
	// 					"https://ik.imagekit.io/dailyobjects/product-images/designer-cases/apple/iphone-11-pro-max/dailyobjects-sunrise-quad-glass-case-cover-for-iphone-11-pro-max-images/DailyObjects-Sunrise-Quad-Glass-Case-Cover-For-iPhone-11-Pro-Max.png",
	// 					"https://ik.imagekit.io/dailyobjects/product-images/designer-cases/apple/iphone-11-pro-max/dailyobjects-sunrise-quad-glass-case-cover-for-iphone-11-pro-max-images/DailyObjects-Sunrise-Quad-Glass-Case-Cover-For-iPhone-11-Pro-Max-1.png",
	// 					"https://ik.imagekit.io/dailyobjects/product-images/designer-cases/apple/iphone-11-pro-max/dailyobjects-sunrise-quad-glass-case-cover-for-iphone-11-pro-max-images/DailyObjects-Sunrise-Quad-Glass-Case-Cover-For-iPhone-11-Pro-Max-2.png",
	// 					"https://ik.imagekit.io/dailyobjects/product-images/designer-cases/apple/iphone-11-pro-max/dailyobjects-sunrise-quad-glass-case-cover-for-iphone-11-pro-max-images/DailyObjects-Sunrise-Quad-Glass-Case-Cover-For-iPhone-11-Pro-Max-3.png",
	// 				],
	// 				video: "",
	// 				wishlist: {
	// 					link: "link",
	// 					wished: true,
	// 				},
	// 				share: "link",
	// 			},
	// 			{
	// 				layout: "offer",
	// 				text: ["Limited Time Offer! Buy 2 for 1499.", "safd"],
	// 				color: {
	// 					background: "#FF6C00",
	// 					text: "#000000",
	// 				},
	// 			},

	// 			{
	// 				layout: "details",
	// 				title: "IPHONE 5",
	// 				subtitle: "Pink Polka Lorem Ipsum Glass Case",
	// 				action: {
	// 					title: "Change Device",
	// 					link: "link",
	// 				},
	// 				price: "Rs. 1230",
	// 				mrp: "mrp",
	// 			},
	// 			{
	// 				layout: "atc",
	// 				title: "ADD TO CART",
	// 				link: "link",
	// 			},
	// 		],
	// 	};

	// 	pdpStyleData = {
	// 		comment: "Product Detail Page Style",
	// 		layout: "tabbed-variants",
	// 		styles: [
	// 			{
	// 				active: true,
	// 				title: "COLOUR",
	// 				layout: "circular-img",
	// 				styles: [
	// 					{
	// 						active: true,
	// 						image:
	// 							"https://ik.imagekit.io/dailyobjects/assets/images/product-page/filters/cases/glass-case.png?tr=f-png",
	// 						title: "Glass",
	// 						link: "",
	// 					},
	// 					{
	// 						active: false,
	// 						image:
	// 							"https://ik.imagekit.io/dailyobjects/assets/images/product-page/filters/cases/clear-case.png?tr=f-png",
	// 						title: "Clear Glass",
	// 						link: "",
	// 					},
	// 					{
	// 						active: false,
	// 						image:
	// 							"https://ik.imagekit.io/dailyobjects/assets/images/product-page/filters/cases/holographic-glass-case.png?tr=f-png",
	// 						title: "Holographic glsee",
	// 						link: "",
	// 					},
	// 					{
	// 						active: false,
	// 						image:
	// 							"https://ik.imagekit.io/dailyobjects/assets/images/product-page/filters/cases/mirror-case.png?tr=f-png",
	// 						title: "Crystal Mirror",
	// 						link: "",
	// 					},
	// 				],
	// 			},
	// 			{
	// 				active: false,
	// 				title: "MATERIAL",
	// 				layout: "circular-img",
	// 				styles: [
	// 					{
	// 						active: false,
	// 						image:
	// 							"https://ik.imagekit.io/dailyobjects/assets/images/product-page/filters/cases/slim-case.png?tr=f-png",
	// 						title: "Slim Case",
	// 						link: "",
	// 					},
	// 					{
	// 						active: false,
	// 						image:
	// 							"https://ik.imagekit.io/dailyobjects/assets/images/product-page/filters/cases/leather-wallet-case.png?tr=f-png",
	// 						title: "Leather Wallet",
	// 						link: "",
	// 					},
	// 					{
	// 						active: true,
	// 						image:
	// 							"https://ik.imagekit.io/dailyobjects/assets/images/product-page/filters/cases/glass-case.png?tr=f-png",
	// 						title: "Glass",
	// 						link: "",
	// 					},
	// 					{
	// 						active: false,
	// 						image:
	// 							"https://ik.imagekit.io/dailyobjects/assets/images/product-page/filters/cases/clear-case.png?tr=f-png",
	// 						title: "Clear Glass",
	// 						link: "",
	// 					},
	// 				],
	// 			},
	// 		],
	// 	};

	// 	subCategoriesListing = {
	// 		comment: "Listing Page Header API",

	// 		styles: [
	// 			{
	// 				active: true,
	// 				image:
	// 					"https://ik.imagekit.io/dailyobjects/assets/images/product-page/filters/cases/glass-case.png?tr=f-png",
	// 				title: "WALLET CASE COVER ",
	// 				link: "",
	// 				color: {
	// 					text: "",
	// 					background: "",
	// 				},
	// 			},
	// 			{
	// 				active: false,
	// 				image:
	// 					"https://ik.imagekit.io/dailyobjects/assets/images/product-page/filters/cases/clear-case.png?tr=f-png",
	// 				title: "PHONE GRIPPER",
	// 				link: "",
	// 				color: {
	// 					text: "",
	// 					background: "",
	// 				},
	// 			},
	// 			{
	// 				active: false,
	// 				image:
	// 					"https://ik.imagekit.io/dailyobjects/assets/images/product-page/filters/cases/holographic-glass-case.png?tr=f-png",
	// 				title: "CABLE PROTECTOR",
	// 				link: "",
	// 				color: {
	// 					text: "",
	// 					background: "",
	// 				},
	// 			},
	// 			{
	// 				active: false,
	// 				image:
	// 					"https://ik.imagekit.io/dailyobjects/assets/images/product-page/filters/cases/mirror-case.png?tr=f-png",
	// 				title: "AIRPODS CASE COVER",
	// 				link: "",
	// 				color: {
	// 					text: "",
	// 					background: "",
	// 				},
	// 			},
	// 			{
	// 				active: false,
	// 				image:
	// 					"https://ik.imagekit.io/dailyobjects/assets/images/product-page/filters/cases/leather-wallet-case.png?tr=f-png",
	// 				title: "CABLES & WRAPS",
	// 				link: "",
	// 				color: {
	// 					text: "",
	// 					background: "",
	// 				},
	// 			},
	// 		],
	// 	};

	// 	bagData = {
	// 		success: true,
	// 		data: {
	// 			title: "COUPON CODES AND OFFERS",
	// 			couponCodes: "url",
	// 			items: [
	// 				{
	// 					image:
	// 						"https://ik.imagekit.io/dailyobjects/product-images/bags-and-sleeves/dailyobjects/tote-bag/dailyobjects-berry-quin-fatty-tote-bag-images/DailyObjects-Berry-Quin-Fatty-Tote-Bag-1.png",
	// 					title: "Pink Polka",
	// 					descriptions: [
	// 						{
	// 							layout: "img",
	// 							title: "title",
	// 							image:
	// 								"https://ik.imagekit.io/dailyobjects/assets/images/product-page/filters/cases/glass-case.png?tr=f-png",
	// 						},
	// 					],
	// 					price: "999",
	// 					mrp: "1099",
	// 					quantity: "5",
	// 					quantityChangeLink: "quantityChangeLink",
	// 					deleteLink: "link",
	// 				},
	// 				{
	// 					image:
	// 						"https://ik.imagekit.io/dailyobjects/product-images/bags-and-sleeves/dailyobjects/tote-bag/dailyobjects-berry-quin-fatty-tote-bag-images/DailyObjects-Berry-Quin-Fatty-Tote-Bag-1.png",
	// 					title: "Pink Polka",
	// 					descriptions: [
	// 						{
	// 							layout: "img",
	// 							title: "title",
	// 							image:
	// 								"https://ik.imagekit.io/dailyobjects/assets/images/product-page/filters/cases/glass-case.png?tr=f-png",
	// 						},
	// 					],
	// 					price: "999",
	// 					mrp: "1099",
	// 					quantity: "5",
	// 					quantityChangeLink: "quantityChangeLink",
	// 					deleteLink: "link",
	// 				},
	// 				{
	// 					image:
	// 						"https://ik.imagekit.io/dailyobjects/product-images/bags-and-sleeves/dailyobjects/tote-bag/dailyobjects-berry-quin-fatty-tote-bag-images/DailyObjects-Berry-Quin-Fatty-Tote-Bag-1.png",
	// 					title: "Pink Polka",
	// 					descriptions: [
	// 						{
	// 							layout: "img",
	// 							title: "title",
	// 							image:
	// 								"https://ik.imagekit.io/dailyobjects/assets/images/product-page/filters/cases/glass-case.png?tr=f-png",
	// 						},
	// 					],
	// 					price: "999",
	// 					mrp: "1099",
	// 					quantity: "9",
	// 					quantityChangeLink: "quantityChangeLink",
	// 					deleteLink: "link",
	// 				},
	// 			],
	// 			offer: {
	// 				layout: "text",
	// 				text: ["Free Delivery on this Offer!"],
	// 				color: {
	// 					background: "#FF6C00",
	// 					text: "#000000",
	// 				},
	// 			},
	// 			costDetails: [
	// 				{
	// 					title: "Item Total (4 Items)",
	// 					color: "#000000",
	// 					value: "999",
	// 				},
	// 				{
	// 					title: "GST",
	// 					color: "#000000",
	// 					value: "999",
	// 				},
	// 				{
	// 					title: "Delivery",
	// 					color: "#000000",
	// 					value: "999",
	// 				},
	// 				{
	// 					title: "Total",
	// 					color: "#FF6C00",
	// 					value: "999",
	// 				},
	// 			],
	// 			cta: {
	// 				title: "CHECKOUT",
	// 				link: "link",
	// 			},
	// 		},
	// 	};
}
