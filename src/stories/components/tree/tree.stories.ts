import type { Meta, StoryObj } from "@storybook/angular";
import { moduleMetadata, applicationConfig } from "@storybook/angular";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { provideAnimations } from "@angular/platform-browser/animations";
import { TreeModule } from "primeng/tree";
import { ButtonModule } from "primeng/button";
import { InputSwitchModule } from "primeng/inputswitch";
import { TreeDragDropService, TreeNode } from "primeng/api";
import description from "./tree.description.md";
import { TreeComponent } from "./tree.component";
import { commonFiles, templateNodes } from "./tree-data";

const expandRecursive = (node: TreeNode, isExpand: boolean) => {
    node.expanded = isExpand;
    if (node.children) {
        node.children.forEach((childNode) => {
            expandRecursive(childNode, isExpand);
        });
    }
};

const meta: Meta = {
    title: "Components/Tree",
    component: TreeComponent,
    decorators: [
        moduleMetadata({
            imports: [
                CommonModule,
                TreeModule,
                FormsModule,
                ReactiveFormsModule,
                ButtonModule,
                InputSwitchModule,
                TreeComponent, // Import the standalone component instead of declaring it
            ],
            providers: [TreeDragDropService],
        }),
        applicationConfig({
            providers: [provideAnimations()],
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
        files: JSON.parse(JSON.stringify(commonFiles)), // Deep clone to avoid circular references
    },
    render: (args) => ({
        props: { ...args },
        template: `<p-tree class="w-full md:w-30rem" [value]="files" />`,
    }),
};

export const checkbox: Story = {
    args: {
        files: JSON.parse(JSON.stringify(commonFiles)), // Deep clone to avoid circular references
        selectedFiles: null,
    },
    render: (args) => ({
        props: { ...args },
        template: `<p-tree [value]="files" selectionMode="checkbox" class="w-full md:w-30rem" [(selection)]="selectedFiles" />`,
    }),
};

export const DragAndDrop: Story = {
    args: {
        files: JSON.parse(JSON.stringify(commonFiles)), // Deep clone to avoid circular references
    },
    render: (args) => ({
        props: { ...args },
        template: `
            <p-tree
    class="w-full md:w-30rem"
    [value]="files"
    [draggableNodes]="true"
    [droppableNodes]="true"
    draggableScope="self"
    droppableScope="self" />
        `,
    }),
};
