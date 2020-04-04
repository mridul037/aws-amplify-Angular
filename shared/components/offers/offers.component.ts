import { Component, OnInit, Input } from "@angular/core";

@Component({
	selector: "app-offers",
	templateUrl: "./offers.component.html",
	styleUrls: ["./offers.component.scss"],
})
export class OffersComponent implements OnInit {
	@Input() offerData;
	constructor() {}

	ngOnInit() {
		console.log("fff", this.offerData);
	}
}
