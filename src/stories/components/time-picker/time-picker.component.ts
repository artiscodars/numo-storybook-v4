import { Component, Input, forwardRef } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
    selector: "numo-time-picker",
    templateUrl: "./time-picker.template.html",
    standalone: true,
    imports: [CommonModule],
})
export class TimePickerComponent {
    @Input() disabled: boolean = false;
    @Input() required: boolean = false;
    @Input() min: string = "";
    @Input() max: string = "";
    @Input() step: string = "";

    @Input() class: string = "";

    @Input() value: string = "";
}
