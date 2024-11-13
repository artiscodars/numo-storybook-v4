import type { Meta, StoryObj } from "@storybook/angular";
import { moduleMetadata } from "@storybook/angular";
import description from "./overlay-panel.description.md"; // Import the markdown file
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { RouterTestingModule } from "@angular/router/testing";
import { OverlayPanelModule } from "primeng/overlaypanel";
import { ButtonModule } from "primeng/button";
import { InputTextModule } from "primeng/inputtext";
import { InputGroupAddonModule } from "primeng/inputgroupaddon";
import { ChipsModule } from "primeng/chips";
import { InputGroupModule } from "primeng/inputgroup";
const meta: Meta = {
    title: "Components/OverlayPanel",
    decorators: [
        moduleMetadata({
            imports: [
                ChipsModule,
                InputGroupModule,
                InputGroupAddonModule,
                InputTextModule,
                ButtonModule,
                OverlayPanelModule,
                BrowserAnimationsModule,
                FormsModule,
                ReactiveFormsModule,
                RouterTestingModule,
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
        template: `<p-button (onClick)="op.toggle($event)" icon="pi pi-share-alt" label="Share" />
    <p-overlayPanel #op>
        <div class="flex flex-column gap-3 w-25rem">
            <div>
                <span class="font-medium text-900 block mb-2">Share this document</span>
                <p-inputGroup>
                    <input pInputText value="https://primeng.org/12323ff26t2g243g423g234gg52hy25XADXAG3" readonly class="w-25rem" />
                    <p-inputGroupAddon>
                        <i class="pi pi-copy"></i>
                    </p-inputGroupAddon>
                </p-inputGroup>
            </div>
            <div>
                <span class="font-medium text-900 block mb-2">Invite Member</span>
                <div class="flex">
                    <p-chips disabled />
                    <p-button label="Invite" icon="pi pi-users" />
                </div>
            </div>
            <div>
                <span class="font-medium text-900 block mb-2">Team Members</span>
                <ul class="list-none p-0 m-0 flex flex-column gap-3">
                    <li *ngFor="let member of members" class="flex align-items-center gap-2">
                        <img [src]="'https://primefaces.org/cdn/primeng/images/demo/avatar/' + member.image" style="width: 32px" />
                        <div>
                            <span class="font-medium">{{ member.name }}</span>
                            <div class="text-sm text-color-secondary">{{ member.email }}</div>
                        </div>
                        <div class="flex align-items-center gap-2 text-color-secondary ml-auto text-sm">
                            <span>{{ member.role }}</span>
                            <i class="pi pi-angle-down"></i>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </p-overlayPanel>`,
    }),
};
