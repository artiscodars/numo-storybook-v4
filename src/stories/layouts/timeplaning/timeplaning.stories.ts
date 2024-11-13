import { applicationConfig } from "@storybook/angular";
import { provideAnimations } from "@angular/platform-browser/animations";
import { Meta, moduleMetadata, StoryObj } from "@storybook/angular";
import { AppComponent } from "./timeplaning.component";
import { HeaderComponent } from "../../components/header/header.component";
import description from "./timeplaning.description.md";

export default {
    title: "Layouts/Timeplaning",
    component: AppComponent,
    tags: ["autodocs"],
    decorators: [
        applicationConfig({
            providers: [provideAnimations()],
        }),
        moduleMetadata({
            imports: [HeaderComponent],
        }),
    ],
    parameters: {
        docs: {
            description: {
                component: description,
            },
        },
    },
} as Meta<AppComponent>;

type Story = StoryObj<AppComponent>;

export const Default: Story = {
    args: {},
};
class TableDemo {
    getSeverity(status: string) {
        switch (status) {
            case "Standarta":
                return "secondary";
            case "Nestandarta":
                return "danger";
            default:
                return "info";
        }
    }
}
