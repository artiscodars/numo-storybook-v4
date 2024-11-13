import type { Meta, StoryObj } from "@storybook/angular";
import { moduleMetadata } from "@storybook/angular";
import description from "./progressbar.description.md"; // Import the markdown file
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ProgressBarModule } from "primeng/progressbar";
const meta: Meta = {
    title: "Components/Progressbar",
    decorators: [
        moduleMetadata({
            imports: [
                ProgressBarModule,
                BrowserAnimationsModule,
                FormsModule,
                ReactiveFormsModule,
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

export const basic: Story = {
    args: {
        value: 50,
        mode: "determinate",
        content: false,
    },
    render: (args) => ({
        props: {
            ...args,
        },
        template: `<p-progressBar mode="indeterminate" [style]="{ height: '6px' }" />`,
    }),
};
