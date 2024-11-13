import { moduleMetadata, type Meta, type StoryObj } from "@storybook/angular";
import description from "./input-group.description.md"; // Import the markdown file
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { InputTextModule } from "primeng/inputtext";
import { FloatLabelModule } from "primeng/floatlabel";
import { InputGroupModule } from "primeng/inputgroup";
import { InputGroupAddonModule } from "primeng/inputgroupaddon";
import { ButtonModule } from "primeng/button";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta: Meta = {
    title: "Components/Form/Input Group",
    decorators: [
        moduleMetadata({
            imports: [
                InputTextModule,
                FormsModule,
                ReactiveFormsModule,
                FloatLabelModule,
                InputGroupModule,
                InputGroupAddonModule,
                ButtonModule,
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

// 1. Button Group Story
export const ButtonGroup: Story = {
    render: () => ({
        template: `
        <p-inputGroup>
            <button type="button" pButton label="M" size="small"  class="bg-white border-blue-200 hover:bg-blue-200"></button>
            <button type="button" pButton label="T" size="small" class="bg-white border-blue-200 hover:bg-blue-200"></button>
            <button type="button" pButton label="W" size="small" class="bg-white border-blue-200 hover:bg-blue-200"></button>
            <button type="button" pButton label="T" size="small" class="bg-white border-blue-200 hover:bg-blue-200"></button>
            <button type="button" pButton label="F" size="small" class="bg-white border-blue-200 hover:bg-blue-200"></button>
            <button type="button" pButton label="S" size="small" class="bg-white border-blue-200 hover:bg-blue-200"></button>
            <button type="button" pButton label="S" size="small" class="bg-white border-blue-200 hover:bg-blue-200"></button>

        </p-inputGroup>
        `,
    }),
};

// 2. Disabled Input and Close Button Story
export const DisabledButtonWithCloseButton: Story = {
    render: () => ({
        template: `
        <p-inputGroup>
            <button type="button" disabled pButton label="12.12.2023" size="small" class="bg-white border-blue-3200"></button>
            <button type="button" pButton icon="pi pi-times" size="small" severity="primary" ></button>
        </p-inputGroup>
        `,
    }),
};
