import { Meta, StoryObj, moduleMetadata } from "@storybook/angular";
// import { Menu } from "./menu.model";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import description from "./menu.description.md";
import { MenuModule } from "primeng/menu";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ButtonModule } from "primeng/button";
import { BadgeModule } from "primeng/badge";
import { RippleModule } from "primeng/ripple";
import { AvatarModule } from "primeng/avatar";
import { ToastModule } from "primeng/toast";
import { RouterTestingModule } from "@angular/router/testing";
import { MessageService } from "primeng/api";
import { IconComponent } from "../icon/icon.component";

const meta: Meta = {
    title: "Components/Menu",
    decorators: [
        moduleMetadata({
            imports: [
                CommonModule,
                FormsModule /* RouterTestingModule.withRoutes([]) */,
                MenuModule,
                BrowserAnimationsModule,
                ButtonModule,
                BadgeModule,
                RippleModule,
                AvatarModule,
                ToastModule,
                RouterTestingModule,
                IconComponent,
            ],
            providers: [MessageService],
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
        items: [
            { label: "New", type: "primeng", icon: "pi pi-plus" },
            { label: "Search", type: "primeng", icon: "pi pi-search" },
        ],
    },
    render: (args) => ({
        props: {
            ...args,
        },
        template: `<p-menu [model]="items" />`,
    }),
};
export const Group: Story = {
    args: {
        items: [
            {
                label: "Documents",
                items: [
                    {
                        label: "New",
                        type: "iconify",
                        icon: "cil:plus",
                    },
                    {
                        label: "Search",
                        type: "iconify",
                        icon: "cil:search",
                    },
                ],
            },
            {
                label: "Profile",
                items: [
                    {
                        label: "Settings",
                        type: "primeng",
                        icon: "pi pi-cog",
                    },
                    {
                        label: "Logout",
                        type: "primeng",
                        icon: "pi pi-sign-out",
                    },
                ],
            },
        ],
    },
    render: (args) => ({
        props: {
            ...args,
        },
        template: `<p-menu [model]="items" />`,
    }),
};
export const Router: Story = {
    args: {
        items: [
            {
                label: "Navigate",
                items: [
                    {
                        label: "Router Link",
                        type: "primeng",
                        icon: "pi pi-palette",
                        route: "/",
                    },
                    {
                        label: "External",
                        type: "primeng",
                        icon: "pi pi-home",
                        url: "https://angular.io//",
                    },
                ],
            },
        ],
    },
    render: (args) => ({
        props: {
            ...args,
        },
        template: `<p-menu [model]="items">
                    <ng-template pTemplate="item" let-item>

                        <ng-container *ngIf="item.route; else elseBlock">
                            <a [routerLink]="item.route" class="p-menuitem-link">
                                <numo-icon [icon]="item.icon" [type]="item.type"></numo-icon>
                                <span class="ml-2">{{ item.label }}</span>
                            </a>
                        </ng-container>
                        <ng-template #elseBlock>
                            <a [href]="item.url" class="p-menuitem-link">
                                <numo-icon [icon]="item.icon" [type]="item.type"></numo-icon>
                                <span class="ml-2">{{ item.label }}</span>
                            </a>
                        </ng-template>
                    </ng-template>
                </p-menu>`,
    }),
};

export const Popup: Story = {
    args: {
        items: [
            {
                label: "Options",
                items: [
                    {
                        label: "Refresh",
                        icon: "pi pi-refresh",
                    },
                    {
                        label: "Export",
                        icon: "pi pi-upload",
                    },
                ],
            },
        ],
    },
    render: (args) => ({
        props: {
            ...args,
        },
        template: `<p-toast />
<p-menu #menu [model]="items" [popup]="true" />
<p-button (onClick)="menu.toggle($event)" icon="pi pi-ellipsis-v"/>`,
    }),
};
export const Template: Story = {
    args: {
        items: [
            {
                separator: true,
            },
            {
                label: "Documents",
                items: [
                    {
                        label: "New",
                        icon: "pi pi-plus",
                        shortcut: "⌘+N",
                    },
                    {
                        label: "Search",
                        icon: "pi pi-search",
                        shortcut: "⌘+S",
                    },
                ],
            },
            {
                label: "Profile",
                items: [
                    {
                        label: "Settings",
                        icon: "pi pi-cog",
                        shortcut: "⌘+O",
                    },
                    {
                        label: "Messages",
                        icon: "pi pi-inbox",
                        badge: "2",
                    },
                    {
                        label: "Logout",
                        icon: "pi pi-sign-out",
                        shortcut: "⌘+Q",
                    },
                ],
            },
            {
                separator: true,
            },
        ],
    },
    render: (args) => ({
        props: {
            ...args,
        },
        template: `<p-menu [model]="items" styleClass="w-full md:w-15rem">
    <ng-template pTemplate="start">
        <span class="inline-flex align-items-center gap-1 px-2 py-2">
            <svg width="33" height="35" viewBox="0 0 33 35" fill="none" xmlns="http://www.w3.org/2000/svg" class="block mx-auto">
                <path d="" fill="var(--primary-color)" />
                <mask id="mask0_1_36" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="0" y="0" width="31" height="33">
                    <path d="" fill="var(--primary-color-text)" />
                </mask>
                <g mask="url(#mask0_1_36)">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="" fill="var(--primary-color)" />
                </g>
                <path d="" fill="var(--primary-color-text)" />
                <path d="" fill="var(--primary-color-text)" />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d=""
                    fill="var(--primary-color-text)"
                />
                <path d="" fill="var(--primary-color-text)" />
                <path d="" fill="var(--primary-color-text)" />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d=""
                    fill="var(--primary-color-text)"
                />
                <path d="" fill="var(--primary-color-text)" />
                <path d="" fill="var(--primary-color-text)" />
                <path d="" fill="var(--primary-color-text)" />
                <path d="" fill="var(--primary-color-text)" />
            </svg>
            <span class="font-medium text-xl font-semibold">
                PRIME<span class="text-primary">APP</span>
            </span>
        </span>
    </ng-template>
    <ng-template pTemplate="submenuheader" let-item>
        <span class="text-primary font-bold">{{ item.label }}</span>
    </ng-template>
    <ng-template pTemplate="item" let-item>
        <a pRipple class="flex align-items-center p-menuitem-link">
            <span [class]="item.icon"></span>
            <span class="ml-2">{{ item.label }}</span>
            <p-badge *ngIf="item.badge" class="ml-auto" [value]="item.badge" />
            <span *ngIf="item.shortcut" class="ml-auto border-1 surface-border border-round surface-100 text-xs p-1">
                {{ item.shortcut }}
            </span>
        </a>
    </ng-template>
    <ng-template pTemplate="end">
        <button pRipple class="relative overflow-hidden w-full p-link flex align-items-center p-2 pl-3 text-color hover:surface-200 border-noround">
            <p-avatar image="https://primefaces.org/cdn/primeng/images/demo/avatar/amyelsner.png" class="mr-2" shape="circle" />
            <span class="inline-flex flex-column">
                <span class="font-bold">Amy Elsner</span>
                <span class="text-sm">Admin</span>
            </span>
        </button>
    </ng-template>
</p-menu>`,
    }),
};
