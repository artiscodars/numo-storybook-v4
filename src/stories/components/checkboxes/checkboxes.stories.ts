import type { Meta, StoryObj } from "@storybook/angular";
import { moduleMetadata } from "@storybook/angular";
import { CheckboxModule } from "primeng/checkbox";
import description from "./checkboxes.description.md"; // Import the markdown file
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

const meta: Meta = {
    title: "Components/Form/Checkboxes",
    decorators: [
        moduleMetadata({
            imports: [CheckboxModule, FormsModule, ReactiveFormsModule],
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
    args: {
        label: "New York",
        binary: true,
        value: "New York",
        classes: "",
        disabled: false,
        variant: "filled",
    },
    render: (args) => ({
        props: {
            ...args,
        },
        template: ` <p-checkbox
            [(ngModel)]="checked"
            [binary]="binary"
            [value]="value"
            [class]="classes"
            [variant]="variant"
            [disabled]="disabled"
            inputId="binary"
            [label]="label"
/>`,
    }),
};

export const Invalid: Story = {
    args: {
        label: "New York",
        binary: true,
        classes: "ng-invalid ng-dirty",
    },
    render: (args) => ({
        props: {
            ...args,
        },
        template: `<p-checkbox
            [(ngModel)]="checked"
            [label]="label"
            value="label"
            [binary]="binary"
            [class]="classes"  />  `,
    }),
};

export const Disabled: Story = {
    args: {
        label: "New York",
        variant: "filled",
        disabled: true,
    },
    render: (args) => ({
        props: {
            ...args,
        },
        template: `<p-checkbox
            [(ngModel)]="checked"
            [binary]="true"
            [label]="label"
            [variant]="variant"
            [disabled]="disabled"/> `,
    }),
};
export const Grouped: Story = {
    args: {},
    render: (args) => ({
        props: {
            ...args,
        },
        template: `
        <div class="card flex justify-content-center gap-3">
    <div class="flex align-items-center">
        <p-checkbox
            [(ngModel)]="pizza"
            label="Cheese"
            name="pizza"
            value="Cheese" />
    </div>
    <div class="flex align-items-center">
        <p-checkbox
            [(ngModel)]="pizza"
            label="Mushroom"
            name="pizza"
            value="Mushroom" />
    </div>
    <div class="flex align-items-center">
        <p-checkbox
            [(ngModel)]="pizza"
            label="Pepper"
            name="pizza"
            value="Pepper" />
    </div>
    <div class="flex align-items-center">
        <p-checkbox
            [(ngModel)]="pizza"
            label="Onion"
            name="pizza"
            value="Onion" />
    </div>
</div>
 `,
    }),
};
