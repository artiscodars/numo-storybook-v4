import type { Meta, StoryObj } from "@storybook/angular";
import { moduleMetadata } from "@storybook/angular";
import description from "./breadcrumb.description.md"; // Import the markdown file
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { BreadcrumbModule } from "primeng/breadcrumb";
import { RouterTestingModule } from "@angular/router/testing";
import { IconComponent } from "../icon/icon.component";

const meta: Meta = {
    title: "Components/Breadcrumb",
    decorators: [
        moduleMetadata({
            imports: [
                BreadcrumbModule,
                BrowserAnimationsModule,
                FormsModule,
                ReactiveFormsModule,
                RouterTestingModule,
                IconComponent,
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

// Prepare the items array and mark the last item
const items = [
    { label: "Home", route: "/" },
    { label: "Category", route: "/category" },
    { label: "Subcategory", route: "/category/subcategory" },
    { label: "Product" }, // This is the last item
];

// Mark the last item
const itemsWithIsLast = items.map((item, index, array) => ({
    ...item,
    isLast: index === array.length - 1,
}));

// Define the home item
const home = { icon: "pi pi-home", route: "/" };

export const basic: Story = {
    args: {
        items: itemsWithIsLast,
        home: home,
    },
    render: (args) => ({
        props: {
            ...args,
        },
        template: `
      <p-breadcrumb class="max-w-full" [model]="items" [home]="home">
        <ng-template pTemplate="item" let-item>
          <ng-container *ngIf="!item.isLast; else lastBreadcrumb">
            <!-- For all items except the last one -->
            <ng-container *ngIf="item.route; else urlItem">
              <!-- If the item has a route -->
              <a [routerLink]="item.route" class="p-menuitem-link">
                <span [ngClass]="[item.icon ? item.icon : '', 'text-color']"></span>
                <span class="text-primary-600">{{ item.label }}</span>
              </a>
            </ng-container>
            <ng-template #urlItem>
              <!-- If the item has a URL -->
              <a [href]="item.url" class="p-menuitem-link">
                <span [ngClass]="[item.icon ? item.icon : '', 'text-color']"></span>
                <span class="text-primary-600">{{ item.label }}</span>
              </a>
            </ng-template>
          </ng-container>
          <ng-template #lastBreadcrumb>
            <!-- For the last item, render as plain text -->
            <span class="text-color">{{ item.label }}</span>
          </ng-template>
        </ng-template>
      </p-breadcrumb>
    `,
    }),
};
