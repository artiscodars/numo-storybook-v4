import type { Meta, StoryObj } from "@storybook/angular";
import { moduleMetadata } from "@storybook/angular";
import description from "./dialog.description.md"; // Import the markdown file
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ButtonModule } from "primeng/button";
import { DialogModule } from "primeng/dialog";
import { InputTextModule } from "primeng/inputtext";

const meta: Meta = {
    title: "Components/Dialog",
    decorators: [
        moduleMetadata({
            imports: [
                DialogModule,
                InputTextModule,
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
    args: {
        visible: false,
        position: "center",
        label: "left",
        maximizable: true,
        draggable: false,
        resizable: false,
        breakpoints: "{ '1199px': '75vw', '575px': '90vw' }",
    },
    render: (args) => ({
        props: {
            ...args,
        },
        template: `<p-button (onClick)="visible = true" label="Show" />
<p-dialog header="Edit Profile"
    [modal]="true"
    [(visible)]="visible"
    [style]="{ width: '25rem' }"
    [maximizable]="maximizable"
    [position]="position"
    [draggable]="false"
    [breakpoints]="breakpoints"
    [resizable]="false">
    <span class="p-text-secondary block mb-5">Update your information.</span>
    <div class="flex align-items-center gap-3 mb-3">
        <label for="username" class="font-semibold w-6rem">Username</label>
        <input pInputText id="username" class="flex-auto" autocomplete="off" />
    </div>
    <div class="flex align-items-center gap-3 mb-5">
        <label for="email" class="font-semibold w-6rem">Email</label>
        <input pInputText id="email" class="flex-auto" autocomplete="off" />
    </div>
    <div class="flex justify-content-start gap-2">
    <p-button label="Save" (onClick)="visible = false" />
    <p-button label="Cancel" [outlined]="true" severity="secondary" (onClick)="visible = false" />

    </div>
</p-dialog>`,
    }),
};
