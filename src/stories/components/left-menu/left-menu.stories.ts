import { Meta, moduleMetadata, StoryObj } from "@storybook/angular";
import description from "./left-menu.description.md";
import { LeftMenuComponent } from "./left-menu.component";
import { Menu } from "./menu.model";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { IconComponent } from "../icon/icon.component";

const meta: Meta = {
    title: "Design blocks/LeftMenu",
    decorators: [
        moduleMetadata({
            imports: [
                LeftMenuComponent,
                BrowserAnimationsModule,
                IconComponent,
            ],
        }),
    ],
    excludeStories: /.*Data$/,
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

export const Basic: Story = {
    args: {
        items: [...Menu],
        className: "",
    },
    render: (args) => ({
        props: {
            ...args,
        },
        template: `<numo-left-menu [className]="className" [items]="items" ></numo-left-menu>`,
    }),
};
