import { moduleMetadata, type Meta, type StoryObj } from "@storybook/angular";
import description from "./input.description.md"; // Import the markdown file
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { InputTextModule } from "primeng/inputtext";
import { FloatLabelModule } from "primeng/floatlabel";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta: Meta = {
    title: "Components/Form/Input",
    decorators: [
        moduleMetadata({
            imports: [
                InputTextModule,
                FormsModule,
                ReactiveFormsModule,
                FloatLabelModule,
            ],
        }),
    ],
    tags: ["autodocs"],
    argTypes: {},
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

export const Basic: Story = {
    args: {
        label: "Email",
        type: "email",
        value: "mail@life.com",
        variant: "filled",
        class: "",
        disabled: false,
    },
    render: (args) => ({
        props: {
            ...args,
        },
        template: `<input
      [type]="type"
      pInputText
      [(ngModel)]="value"
      [variant]="variant"
      [class]="class"
      [disabled]="disabled"
    />`,
    }),
};
export const ReactiveForms: Story = {
    args: {
        type: "text",
        value: "test",
    },
    render: (args) => ({
        props: {
            ...args,
        },
        template: `<input [type]="type" pInputText />`,
    }),
};
export const HelpText: Story = {
    args: {
        type: "text",
        value: "test",
    },
    render: (args) => ({
        props: {
            ...args,
        },
        template: `<div class="flex flex-column gap-2" style="display:flex;flex-direction:column;gap:20px">
    <label for="username">Username</label>
    <input
        pInputText
        id="username"
        aria-describedby="username-help"
        [(ngModel)]="value" />
    <small id="username-help">
        Enter your username to reset your password.
    </small>
</div>`,
    }),
};
export const Floatlabel: Story = {
    args: {
        type: "text",
        value: "",
        label: "Username",
    },
    render: (args) => ({
        props: {
            ...args,
        },
        template: `<p-floatLabel>
    <input pInputText id="username" [(ngModel)]="value" />
    <label for="username">{{label}}</label>
</p-floatLabel>
`,
    }),
};
export const Filled: Story = {
    args: {
        type: "text",
        value: "",
        variant: "filled",
    },
    render: (args) => ({
        props: {
            ...args,
        },
        template: `<input
    [type]="type"
    pInputText
    [(ngModel)]="value"
    [variant]="variant" />
`,
    }),
};
export const Invalid: Story = {
    args: {
        type: "text",
        value: "",
        variant: "filled",
        class: "ng-invalid ng-dirty",
    },
    render: (args) => ({
        props: {
            ...args,
        },
        template: `<input
    pInputText
    [class]="class"
    [(ngModel)]="value" />
`,
    }),
};
export const Disabled: Story = {
    args: {
        type: "text",
        value: "",
        disabled: "true",
    },
    render: (args) => ({
        props: {
            ...args,
        },
        template: `<input
    id="disabled-input"
    [type]="type"
    pInputText
    [disabled]="disabled"
    [(ngModel)]="value" />
`,
    }),
};
