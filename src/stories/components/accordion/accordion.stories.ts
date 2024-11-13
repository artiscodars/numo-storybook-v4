import type { Meta, StoryObj } from "@storybook/angular";
import { moduleMetadata } from "@storybook/angular";
import { AccordionModule } from "primeng/accordion";
import description from "./accordion.description.md"; // Import the markdown file
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ButtonModule } from "primeng/button";
import { BadgeModule } from "primeng/badge";
import { AvatarModule } from "primeng/avatar";

const meta: Meta = {
    title: "Components/Accordion",
    decorators: [
        moduleMetadata({
            imports: [
                AccordionModule,
                BrowserAnimationsModule,
                FormsModule,
                ReactiveFormsModule,
                ButtonModule,
                AvatarModule,
                BadgeModule,
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
        multiple: false,
        disabled: false,
    },
    render: (args) => ({
        props: {
            ...args,
        },
        template: `<p-accordion [multiple]="multiple" [activeIndex]="0">
    <p-accordionTab header="Header I"  [disabled]="disabled">
        <p>
            Lorem ipsum dolor sit amet...
        </p>
    </p-accordionTab>
    <p-accordionTab header="Header II">
        <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium...
        </p>
    </p-accordionTab>
    <p-accordionTab header="Header III" >
        <p>
            At vero eos et accusamus et iusto odio dignissimos...
        </p>
    </p-accordionTab>
</p-accordion>`,
    }),
};

export const Multiple: Story = {
    args: {
        multiple: true,
    },
    render: (args) => ({
        props: {
            ...args,
        },
        template: `<p-accordion [multiple]="multiple" [activeIndex]="[0]">
    <p-accordionTab header="Header I">
        <p>
            Lorem ipsum dolor sit amet...
        </p>
    </p-accordionTab>
    <p-accordionTab header="Header II">
        <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium...
        </p>
    </p-accordionTab>
    <p-accordionTab header="Header III">
        <p>
            At vero eos et accusamus et iusto odio dignissimos...
        </p>
    </p-accordionTab>
</p-accordion>`,
    }),
};
