import type { Meta, StoryObj } from "@storybook/angular";
import { moduleMetadata } from "@storybook/angular";
import description from "./tab-view.description.md"; // Import the markdown file
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { TabViewModule } from "primeng/tabview";
import { ButtonModule } from "primeng/button";

const meta: Meta = {
    title: "Components/TabView",
    decorators: [
        moduleMetadata({
            imports: [
                TabViewModule,
                BrowserAnimationsModule,
                FormsModule,
                ReactiveFormsModule,
                ButtonModule,
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
    args: {},
    render: (args) => ({
        props: {
            ...args,
        },
        template: `<p-tabView>
    <p-tabPanel header="Header I">
        <p>
            Lorem ipsum dolor sit amet...
        </p>
    </p-tabPanel>
    <p-tabPanel header="Header II">
        <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium...
        </p>
    </p-tabPanel>
    <p-tabPanel header="Header III">
        <p>
            At vero eos et accusamus et iusto odio dignissimos...
        </p>
    </p-tabPanel>
</p-tabView>`,
    }),
};
export const dynamic: Story = {
    args: {
        tabs: [
            { title: "Tab 1", content: "Tab 1 Content" },
            { title: "Tab 2", content: "Tab 2 Content" },
            { title: "Tab 3", content: "Tab 3 Content" },
        ],
    },
    render: (args) => ({
        props: {
            ...args,
        },
        template: `<p-tabView>
<p-tabPanel *ngFor="let tab of tabs" [header]="tab.title">
    <p>
        {{ tab.content }}
    </p>
</p-tabPanel>
</p-tabView>`,
    }),
};
export const disabled: Story = {
    args: {
        tabs: [
            { title: "Tab 1", content: "Tab 1 Content" },
            { title: "Tab 2", content: "Tab 2 Content" },
            { title: "Tab 3", content: "Tab 3 Content" },
        ],
    },
    render: (args) => ({
        props: {
            ...args,
        },
        template: `<p-tabView>
    <p-tabPanel header="Header I">
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit...
        </p>
    </p-tabPanel>
    <p-tabPanel header="Header II">
        <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium...
        </p>
    </p-tabPanel>
    <p-tabPanel header="Header III">
        <p>
            At vero eos et accusamus et iusto odio dignissimos...
        </p>
    </p-tabPanel>
    <p-tabPanel [disabled]="true" header="Header IV" />
</p-tabView>`,
    }),
};
