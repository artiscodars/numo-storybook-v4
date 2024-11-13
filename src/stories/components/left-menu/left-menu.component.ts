import { CommonModule } from "@angular/common";
import { Component, CUSTOM_ELEMENTS_SCHEMA, Input } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { PanelMenuModule } from "primeng/panelmenu";
import { IconComponent } from "../icon/icon.component";
import { Button } from "primeng/button";
import { BadgeModule } from "primeng/badge";

@Component({
    selector: "numo-left-menu",
    standalone: true,
    imports: [
        FormsModule,
        CommonModule,
        PanelMenuModule,
        IconComponent,
        Button,
        BadgeModule,
    ],
    templateUrl: "./left-menu.component.html",
    styles: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class LeftMenuComponent {
    @Input() items: any = [];
    @Input() className = "";
    @Input() notificationCount = "0";
    isFirstLevel(item: any): boolean {
        // Check if the item is in the root items array
        return this.items.includes(item);
    }
}
