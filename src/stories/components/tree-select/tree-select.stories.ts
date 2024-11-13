import type { Meta, StoryObj } from "@storybook/angular";
import { moduleMetadata } from "@storybook/angular";
import description from "./tree-select.description.md"; // Import the markdown file
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { RouterTestingModule } from "@angular/router/testing";
import { TreeSelectModule } from "primeng/treeselect";
import { nodes } from "./tree-select.data";
const meta: Meta = {
    title: "Components/Form/TreeSelect",
    decorators: [
        moduleMetadata({
            imports: [
                TreeSelectModule,
                BrowserAnimationsModule,
                FormsModule,
                ReactiveFormsModule,
                RouterTestingModule,
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

export const checkbox: Story = {
    args: {
        nodes: nodes,
        selectionMode: "checkbox",
        metaKeySelection: false,
    },
    render: (args) => ({
        props: {
            ...args,
        },
        template: `
    <p-treeSelect
        class="w-full md:w-20rem"
        containerStyleClass="w-full"
        [(ngModel)]="selectedNodes"
        [options]="nodes"
        display="chip"
        [metaKeySelection]="metaKeySelection"
        [selectionMode]="selectionMode"
        placeholder="Select Item" />
`,
    }),
};
