import { Component, Input } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MessageService } from "primeng/api";
import { ButtonModule } from "primeng/button";
import { ToastModule } from "primeng/toast";

@Component({
    selector: "p-toast-wrapper",
    imports: [ToastModule, FormsModule, ReactiveFormsModule, ButtonModule],
    template: `
        <p-toast></p-toast>
        <p-button (onClick)="show()" label="Show"></p-button>
    `,
    providers: [MessageService],
    standalone: true,
})
export class ToastComponent {
    @Input() severity: string = "success";
    @Input() summary: string = "Success";
    @Input() detail: string = "Message Content";

    constructor(private messageService: MessageService) {}

    show() {
        this.messageService.add({
            severity: this.severity,
            summary: this.summary,
            detail: this.detail,
        });
    }
}
