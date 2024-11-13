import type { Meta, StoryObj } from "@storybook/angular";
import { moduleMetadata } from "@storybook/angular";
import { TooltipModule } from "primeng/tooltip";
import description from "./tooltip.description.md"; // Import the markdown file
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ButtonModule } from "primeng/button";
import { InputTextModule } from "primeng/inputtext";

const meta: Meta = {
    title: "Components/Tooltip",
    decorators: [
        moduleMetadata({
            imports: [
                TooltipModule,
                FormsModule,
                ReactiveFormsModule,
                ButtonModule,
                InputTextModule,
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

export const Position: Story = {
    args: {
        tooltipPosition: "Right",
        tooltipLabel: "Enter your username",
        tooltipEvent: "hover",
        autoHide: true,
        showDelay: 1000,
        hideDelay: 300,
        tooltipOptions: {
            showDelay: 150,
            autoHide: false,
            tooltipEvent: "hover",
            tooltipPosition: "left",
        },
    },
    render: (args) => ({
        props: {
            ...args,
        },
        template: `<input
    type="text"
    pInputText
    [pTooltip]="tooltipLabel"
    [tooltipPosition]="tooltipPosition"
    [placeholder]="tooltipLabel"
    [autoHide]="autoHide"
    [showDelay]="showDelay"
    [hideDelay]="hideDelay"
    [tooltipOptions]="tooltipOptions" />
 `,
    }),
};
export const Event: Story = {
    args: {
        tooltipPosition: "Right",
        tooltipPaceholder: "focus to display tooltip",
        tooltipLabel: "Enter your username",
        event: "focus",
    },
    render: (args) => ({
        props: {
            ...args,
        },
        template: `<input
    type="text"
    pInputText
    [pTooltip]="tooltipLabel"
    [tooltipEvent]="event"
    [placeholder]="tooltipPaceholder" />
 `,
    }),
};
export const AutoHide: Story = {
    args: {
        tooltipPaceholder: "focus to display tooltip",
        tooltipLabel: "Enter your username",
        autoHide: false,
    },
    render: (args) => ({
        props: {
            ...args,
        },
        template: `<input
    type="text"
    pInputText
    [pTooltip]="tooltipLabel"
    [autoHide]="autoHide"
    [placeholder]="tooltipPaceholder" />`,
    }),
};
export const Delay: Story = {
    args: {
        label: "Save",
        tooltipLabel: "Confirm to proceed",
        showDelay: 1000,
        hideDelay: 300,
    },
    render: (args) => ({
        props: {
            ...args,
        },
        template: `<p-button
    [pTooltip]="tooltipLabel"
    [showDelay]="showDelay"
    [hideDelay]="hideDelay"
    [label]="label" /> `,
    }),
};
export const Custom: Story = {
    args: {
        tooltipPosition: "bottom",
        severity: "secondary",
        label: "Button",
    },
    render: (args) => ({
        props: {
            ...args,
        },
        template: ` <p-button
    [pTooltip]="tooltipContent"
    [severity]="severity"
     [tooltipPosition]="tooltipPosition"
    [label]="label"  />
<ng-template #tooltipContent>
    <div class="flex align-items-center">
        <span> <b>PrimeNG</b> rocks! </span>
    </div>
</ng-template>`,
    }),
};

export const TooltipOption: Story = {
    args: {
        tooltipOptions: {
            showDelay: 150,
            autoHide: false,
            tooltipEvent: "hover",
            tooltipPosition: "left",
        },
    },
    render: (args) => ({
        props: {
            ...args,
        },
        template: `<input
    type="text"
    pInputText
    pTooltip="Enter your username"
    [tooltipOptions]="tooltipOptions"
    placeholder="hover to display tooltip" /> `,
    }),
};
