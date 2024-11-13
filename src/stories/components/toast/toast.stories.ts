import type { Meta, StoryObj } from "@storybook/angular";
import { moduleMetadata } from "@storybook/angular";
import { ToastModule } from "primeng/toast";
import description from "./toast.description.md"; // Import the markdown file
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ButtonModule } from "primeng/button";
import { InputTextModule } from "primeng/inputtext";
import { MessageService } from "primeng/api";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ToastComponent } from "./toast.component";

const meta: Meta = {
    title: "Components/Toast",
    component: ToastComponent,
    decorators: [
        moduleMetadata({
            imports: [
                ToastModule,
                FormsModule,
                ReactiveFormsModule,
                ButtonModule,
                InputTextModule,
                BrowserAnimationsModule,
            ],
            providers: [MessageService],
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

export const Info: Story = {
    render: (args) => ({
        component: ToastComponent,
        props: {
            severity: "info",
            summary: "Information",
            detail: "This is an informative message.",
        },
    }),
};

export const Success: Story = {
    render: (args) => ({
        component: ToastComponent,
        props: {
            severity: "success",
            summary: "Success",
            detail: "This is a success message.",
        },
    }),
};

export const Warning: Story = {
    render: (args) => ({
        component: ToastComponent,
        props: {
            severity: "warn",
            summary: "Warning",
            detail: "This is a warning message.",
        },
    }),
};

export const Error: Story = {
    render: (args) => ({
        component: ToastComponent,
        props: {
            severity: "error",
            summary: "Error",
            detail: "This is an error message.",
        },
    }),
};
