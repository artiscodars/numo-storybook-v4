import type { Meta, StoryObj } from "@storybook/angular";
import { moduleMetadata } from "@storybook/angular";
import description from "./confirm-dialog.description.md"; // Import the markdown file
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ButtonModule } from "primeng/button";
import { InputTextModule } from "primeng/inputtext";
import { ConfirmDialogModule } from "primeng/confirmdialog";
import { ToastModule } from "primeng/toast";
import { ConfirmationService, MessageService } from "primeng/api";
import { ConfirmDialogComponent } from "./confirm-dialog.component";

const meta: Meta = {
    title: "Components/Confirmation Dialog",
    component: ConfirmDialogComponent,
    decorators: [
        moduleMetadata({
            imports: [
                ConfirmDialogModule,
                InputTextModule,
                BrowserAnimationsModule,
                FormsModule,
                ReactiveFormsModule,
                ButtonModule,
                ToastModule,
            ],
            providers: [ConfirmationService, MessageService],
        }),
    ],
    tags: ["autodocs"],
    parameters: {
        docs: {
            description: {
                component: description,
            },
        },
    },
};

export default meta;
type Story = StoryObj;

export const basic: Story = {
    args: {},
    render: (args) => ({
        props: {
            ...args,
        },
        template: `<p-confirm-dialog-wrapper />`,
    }),
};
