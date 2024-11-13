import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ConfirmationService, MessageService } from "primeng/api";
import { ButtonModule } from "primeng/button";
import { ConfirmDialogModule } from "primeng/confirmdialog";
import { ToastModule } from "primeng/toast";

@Component({
    selector: "p-confirm-dialog-wrapper",
    imports: [
        CommonModule,
        ToastModule,
        FormsModule,
        ReactiveFormsModule,
        ButtonModule,
        ConfirmDialogModule,
    ],
    template: `
        <p-toast />
        <p-confirmDialog #cd>
            <ng-template pTemplate="message" let-message>
                {{ message.header }}
            </ng-template>
        </p-confirmDialog>

        <div class="card flex flex-wrap gap-3 justify-content-center">
            <p-button
                (onClick)="confirm1($event)"
                label="Save"
                [outlined]="false"
                severity="primary"
            />
            <p-button
                (onClick)="confirm2($event)"
                label="Delete"
                severity="danger"
                [outlined]="false"
            />
        </div>
    `,
    styles: [
        `
            :host::ng-deep.p-dialog-footer {
                display: flex !important;
                justify-content: start !important;
                flex-direction: row-reverse !important;
            }
        `,
    ],
    standalone: true,
})
export class ConfirmDialogComponent {
    constructor(
        private messageService: MessageService,
        private confirmService: ConfirmationService,
    ) {}

    confirm1(event: any) {
        this.confirmService.confirm({
            target: event.target as EventTarget,
            message: "Are you sure that you want to proceed?",
            header: "Confirmation",
            icon: "",
            acceptLabel: "Saglabāt",
            rejectLabel: "Atcelt",
            acceptIcon: "none",
            rejectIcon: "none",
            acceptButtonStyleClass: "p-button-success",
            rejectButtonStyleClass: "p-button-secondary p-button-outlined",
            accept: () => {
                this.messageService.add({
                    severity: "success",
                    summary: "Confirmed",
                    detail: "You have accepted",
                });
            },
            reject: () => {
                this.messageService.add({
                    severity: "secondary",
                    summary: "Rejected",
                    detail: "You have rejected",
                    life: 3000,
                });
            },
        });
    }
    confirm2(event: any) {
        this.confirmService.confirm({
            target: event.target as EventTarget,
            message: "Do you want to delete this record?",
            header: "Delete Confirmation",
            icon: "",
            acceptLabel: "Dzēst",
            rejectLabel: "Atcelt",
            acceptButtonStyleClass: "p-button-danger",
            rejectButtonStyleClass: "p-button-secondary p-button-outlined",
            acceptIcon: "none",
            rejectIcon: "none",

            accept: () => {
                this.messageService.add({
                    severity: "success",
                    summary: "Confirmed",
                    detail: "Record deleted",
                });
            },
            reject: () => {
                this.messageService.add({
                    severity: "info",
                    summary: "Rejected",
                    detail: "You have rejected",
                });
            },
        });
    }
}
