import { Component, Input } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
    selector: "numo-icon",
    templateUrl: "./icon.template.html",
    standalone: true,
    imports: [CommonModule],
})
export class IconComponent {
    @Input() icon!: string;
    @Input() type: "iconify" | "material-symbols" | "primeng" = "primeng";
    @Input() class: string = " ";
    @Input() size: string = "12px";
    @Input() color: string = "black";
}
