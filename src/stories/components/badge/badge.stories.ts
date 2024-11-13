import type { Meta, StoryObj } from "@storybook/angular";
import { moduleMetadata } from "@storybook/angular";
import description from "./badge.description.md";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { BadgeModule } from "primeng/badge";

const meta: Meta = {
    title: "Components/Badge",
    decorators: [
        moduleMetadata({
            imports: [
                BrowserAnimationsModule,
                FormsModule,
                ReactiveFormsModule,
                BadgeModule,
            ],
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

// Basic Badge
export const basic: Story = {
    args: {
        size: "small",
        value: 2,
    },
    render: (args) => ({
        props: {
            ...args,
        },
        template: `<p-badge [badgeSize]="size" [value]="value" />`,
    }),
};

// Info Badge
export const info: Story = {
    args: {
        size: "normal",
        severity: "info",
        value: 5,
    },
    render: (args) => ({
        props: {
            ...args,
        },
        template: `<p-badge [badgeSize]="size" [severity]="severity" [value]="value" />`,
    }),
};

// Success Badge
export const success: Story = {
    args: {
        size: "normal",
        severity: "success",
        value: 1,
    },
    render: (args) => ({
        props: {
            ...args,
        },
        template: `<p-badge [badgeSize]="size" [severity]="severity" [value]="value" />`,
    }),
};

// Warning Badge
export const warning: Story = {
    args: {
        size: "normal",
        severity: "warning",
        value: "!",
    },
    render: (args) => ({
        props: {
            ...args,
        },
        template: `<p-badge [badgeSize]="size" [severity]="severity" [value]="value" />`,
    }),
};

// Error Badge
export const error: Story = {
    args: {
        size: "normal",
        severity: "danger",
        value: 3,
    },
    render: (args) => ({
        props: {
            ...args,
        },
        template: `<p-badge [badgeSize]="size" [severity]="severity" [value]="value" />`,
    }),
};

// Dot Badge
export const dot: Story = {
    args: {
        size: "small",
        severity: "info",
        value: "",
    },
    render: (args) => ({
        props: {
            ...args,
        },
        template: `<p-badge [badgeSize]="size" [severity]="severity" [value]="value" [dot]="true" />`,
    }),
};
