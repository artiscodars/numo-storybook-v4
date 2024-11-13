import type { Meta, StoryObj } from "@storybook/angular";
import { moduleMetadata } from "@storybook/angular";
import { ButtonModule } from "primeng/button";
import description from "./button.description.md"; // Import the markdown file
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

const meta: Meta = {
    title: "Components/Form/Button (desc)",
    decorators: [
        moduleMetadata({
            imports: [ButtonModule, FormsModule, ReactiveFormsModule],
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

export const Primary: Story = {
    args: {
        label: "Primary",
        class: "p-button-primary",
        link: false,
        icon: "",
        iconPos: "right",
        marginLeft: "10px",
        loading: false,
        rounded: false,
        text: false,
        raised: false,
        outlined: false,
        badge: 0,
        badgeClass: "p-badge-success",
    },
    render: (args) => ({
        props: {
            ...args,
        },
        template: `<p-button
  [label]="label"
  [class]="class"
  [link]="link"
  icon="pi pi-{{icon}}"
  [iconPos]="iconPos"
  [ngStyle]="{'margin-left': marginLeft}"
  [loading]="loading"
  [rounded]="rounded"
  [text]="text"
  [raised]="raised"
  [outlined]="outlined"
  [badge]="badge"
  [badgeClass]="badgeClass"
/>`,
    }),
};
export const basic: Story = {
    args: {},
    render: (args) => ({
        props: {
            ...args,
        },

        template: `
       <div class="card flex flex-wrap gap-3 justify-content-center">
    <p-button label="Primary" />
    <p-button label="Secondary" severity="secondary" />
    <p-button label="Success" severity="success" />
    <p-button label="Danger" severity="danger" />
<p-button label="Link" link="true" />

</div>`,
    }),
};

export const Link: Story = {
    args: {
        label: "Link",
        class: "p-button",
        link: "https://angular.dev/",
        marginLeft: "10px",
    },
    render: (args) => ({
        props: {
            ...args,
        },
        template: `
              <a [href]="link" target="_blank" rel="noopener noreferrer" class="font-bold" class="p-button-transparent">External</a>

                `,
    }),
};

export const ButtonsWithIcons: Story = {
    args: {
        label: "Submit",
        class: "p-button",
        link: "https://angular.dev/",
        icon: "check",
        iconPos: "right",
    },
    render: (args) => ({
        props: {
            ...args,
        },
        template: `<div class="card flex justify-content-center gap-2">
    <p-button icon="pi pi-{{icon}}" />
    <p-button [label]="label" icon="pi pi-{{icon}}" />
</div>`,
    }),
};

export const OutlinedButtons: Story = {
    args: {
        outlined: true,
        label: "Outlined Button",
        class: "p-button-outlined",
    },
    render: (args) => ({
        props: {
            ...args,
        },
        template: `<div class="card flex flex-wrap gap-3 justify-content-center">
    <p-button label="Primary" [outlined]="true" />
<p-button label="Secondary" [outlined]="true" severity="secondary" />
<p-button label="Success" [outlined]="true" severity="success" />
<p-button label="Info" [outlined]="true" severity="info" />
<p-button label="Warning" [outlined]="true" severity="warning" />
<p-button label="Help" [outlined]="true" severity="help" />
<p-button label="Danger" [outlined]="true" severity="danger" />
<p-button label="Contrast" [outlined]="true" severity="contrast" />
</div>`,
    }),
};
