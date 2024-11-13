import { Meta, StoryObj, moduleMetadata } from "@storybook/angular";
import { HeaderComponent } from "./header.component";
import description from "./header.description.md";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

const meta: Meta<HeaderComponent> = {
    title: "Design blocks/Header",
    component: HeaderComponent,
    excludeStories: /.*Data$/,
    tags: ["autodocs"],
    decorators: [
        moduleMetadata({
            imports: [, /* RouterTestingModule */ BrowserAnimationsModule],
        }),
    ],
    render: () => ({
        props: {},
        template: `<numo-header [isStoryBook]="true" ></numo-header>`,
    }),
    parameters: {
        docs: {
            description: {
                component: description,
            },
        },
    },
};

export default meta;
type Story = StoryObj<HeaderComponent>;

export const Default: Story = {
    args: {},
};
