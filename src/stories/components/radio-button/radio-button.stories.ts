import type { Meta, StoryObj } from "@storybook/angular";
import { moduleMetadata } from "@storybook/angular";
import { RadioButtonModule } from "primeng/radiobutton";
import description from "./radio-button.description.md"; // Import the markdown file
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

const meta: Meta = {
    title: "Components/Form/RadioButton",
    decorators: [
        moduleMetadata({
            imports: [RadioButtonModule, FormsModule, ReactiveFormsModule],
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

export const Group: Story = {
    args: {
        label: "Cheese",
        variant: "group",
        name: "pizza",
        disabled: false,
        classes: "",
        binary: false,
        value: "Cheese",
    },
    render: (args) => ({
        props: {
            ...args,
        },
        template: `<div class="flex flex-wrap gap-3" style="display:flex;flex-wrap:wrap;gap:30px">
    <div class="flex align-items-center">
        <p-radioButton
            name="{{name}}"
            value="{{value}}"
            [(ngModel)]="ingredient"
            inputId="ingredient1"
            [disabled]="disabled"
            [class]="classes"
            [variant]="variant" />
        <label for="ingredient1" class="ml-2">
            {{label}}
        </label>
    </div>

    <div class="flex align-items-center">
        <p-radioButton
            name="{{name}}"
            value="Mushroom"
            [(ngModel)]="ingredient"
            inputId="ingredient2"
            [disabled]="disabled"
            [class]="classes"
            [variant]="variant" />
        <label for="ingredient2" class="ml-2">
            Mushroom
        </label>
    </div>

    <div class="flex align-items-center">
        <p-radioButton
            name="{{name}}"
            value="Pepper"
            [(ngModel)]="ingredient"
            inputId="ingredient3"
            [disabled]="disabled"
            [class]="classes"
            [variant]="variant" />
        <label for="ingredient3" class="ml-2">
            Pepper
        </label>
    </div>

    <div class="flex align-items-center">
        <p-radioButton
            name="{{name}}"
            value="Onion"
            [(ngModel)]="ingredient"
            inputId="ingredient4"
            [disabled]="disabled"
            [class]="classes"
            [variant]="variant" />
        <label for="ingredient4" class="ml-2">
            Onion
        </label>
    </div>
</div>
`,
    }),
};
export const ReactiveForms: Story = {
    args: {
        categories: [
            { name: "Accounting", key: "A" },
            { name: "Marketing", key: "M" },
            { name: "Production", key: "P" },
        ]
    },
    render: (args) => ({
        props: {
            ...args,
        },
        template: `<form class="flex flex-column gap-3" style="display:flex;flex-direction:column;gap:30px">
    <div *ngFor="let category of categories" class="field-checkbox">
        <p-radioButton
            [(ngModel)]="checked"
            [name]="category.name"
            [inputId]="category.key"
            [value]="category" />
        <label [for]="category.key" class="ml-2">
            {{ category.name }}
        </label>
    </div>
</form>`,
    }),
};
export const Invalid: Story = {
    args: {
        label: "New York",
        formControlName: "city",
        binary: true,
        classes: "ng-invalid ng-dirty text-red-600",
    },
    render: (args) => ({
        props: {
            ...args,
        },
        template: `<p-radioButton [(ngModel)]="checked" [class]="classes" [label]="label"  />  `,
    }),
};
export const Dynamic: Story = {
    args: {
        selectedCategory: null,
        categories: [
            { name: "Accounting", key: "A" },
            { name: "Marketing", key: "M" },
            { name: "Production", key: "P" },
            { name: "Research", key: "R" },
        ],
    },
    render: (args) => ({
        props: {
            ...args,
        },
        template: `<div class="flex flex-column gap-3" style="display:flex;flex-direction:column;gap:30px">
    <div *ngFor="let category of categories" class="field-checkbox">
        <p-radioButton
            [inputId]="category.key"
            name="category"
            [value]="category"
            [(ngModel)]="selectedCategory" />
        <label [for]="category.key" class="ml-2">
            {{ category.name }}
        </label>
    </div>
</div>`,
    }),
};

export const Filled: Story = {
    args: {
        checked: false,
        variant: "filled",
    },
    render: (args) => ({
        props: {
            ...args,
        },
        template: `<p-radioButton [(ngModel)]="checked" [variant]="variant" /> `,
    }),
};
export const Disabled: Story = {
    args: {
        disabled: true,
    },
    render: (args) => ({
        props: {
            ...args,
        },
        template: `<p-radioButton [(ngModel)]="checked" [disabled]="disabled"/> `,
    }),
};
