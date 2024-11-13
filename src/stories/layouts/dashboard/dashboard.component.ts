import { Component, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { RouterOutlet } from "@angular/router";

@Component({
    selector: "numo-dashboard",
    standalone: true,
    imports: [RouterOutlet],
    templateUrl: "./dashboard.template.html",
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class DashboardComponent {
    title = "angular-latest";
}
