import type { Meta, StoryObj } from "@storybook/angular";
import { moduleMetadata } from "@storybook/angular";
import description from "./divider.description.md"; // Import the markdown file
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { DividerModule } from "primeng/divider";
const meta: Meta = {
    title: "Components/Divider",
    decorators: [
        moduleMetadata({
            imports: [
                DividerModule,
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
        type: "solid",
        layout: "horizontal",
        align: "left",
        label: "Left",
    },
    render: (args) => ({
        props: {
            ...args,
        },
        template: `
        <div class="bg-white p-4">
        <p>
    Lorem ipsum dolor sit amet...
</p>
<p-divider [type]="type" [layout]="layout"  />
<p>
    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium...
</p>
<p-divider [align]="align" [type]="type">
    <b>{{label}}</b>
    </p-divider>
<p>
    At vero eos et accusamus et iusto odio dignissimos...
</p>
<p-divider type="dashed"  />
<p>
    Temporibus autem quibusdam et aut officiis...
</p></div>`,
    }),
};
