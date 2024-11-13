import { moduleMetadata, type Meta, type StoryObj } from "@storybook/angular";
import description from "./search.description.md"; // Import the markdown file
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { InputTextModule } from "primeng/inputtext";
import { FloatLabelModule } from "primeng/floatlabel";
import { IconComponent } from "../icon/icon.component";
import { IconFieldModule } from "primeng/iconfield";
import { InputIconModule } from "primeng/inputicon";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta: Meta = {
    title: "Components/Form/Search",
    decorators: [
        moduleMetadata({
            imports: [
                InputTextModule,
                FormsModule,
                ReactiveFormsModule,
                FloatLabelModule,
                IconComponent,
                IconFieldModule,
                InputIconModule,
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

export const Basic: Story = {
    args: {},
    render: (args) => ({
        props: {
            ...args,
        },
        template: `
        <p-iconField iconPosition="right" class="w-full">
            <p-inputIcon>
                <numo-icon icon="search" type="material-symbols" class="text-2xl"></numo-icon>
            </p-inputIcon>
            <input type="text" pInputText placeholder="Meklēt" class="w-full" />
        </p-iconField>
        `,
    }),
};
