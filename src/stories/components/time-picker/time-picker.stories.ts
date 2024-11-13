import { Meta, StoryObj, moduleMetadata } from "@storybook/angular";
import { TimePickerComponent } from "./time-picker.component";
import { FormsModule } from "@angular/forms";
import { ButtonModule } from "primeng/button";
import description from "./time-picker.description.md";

export default {
    title: "Components/Form/Time Picker",
    component: TimePickerComponent,
    decorators: [
        moduleMetadata({
            imports: [FormsModule, ButtonModule], // Import FormsModule for [(ngModel)] to work
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
    argTypes: {
        value: { control: "text" },
        min: { control: "text" },
        max: { control: "text" },
        step: { control: "text" },
        required: { control: "boolean" },
        disabled: { control: "boolean" },
    },
} as Meta<TimePickerComponent>;

type Story = StoryObj<TimePickerComponent>;

export const Basic: Story = {
    args: {
        value: "12:00",
        min: "09:00",
        max: "18:00",
        step: "300",
        required: false,
        disabled: false,
        class: "",
    },
    render: (args) => ({
        props: {
            ...args,
            // This ensures changes are reflected in the component
            handleInputChange: (value: string) => (args.value = value),
        },
        template: `

        <numo-time-picker [value]="value"  [min]="min" [max]="max" [step]="step" [required]="required" [disabled]="disabled" [class]="class"></numo-time-picker>

        `,
    }),
};
