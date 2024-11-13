import { moduleMetadata, type Meta, type StoryObj } from "@storybook/angular";
import description from "./table.description.md"; // Import the markdown file
import { TableModule } from "primeng/table";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FloatLabelModule } from "primeng/floatlabel";
import { CommonModule } from "@angular/common";
import { RatingModule } from "primeng/rating";
import { TagModule } from "primeng/tag";
import { BadgeModule } from "primeng/badge";
import { ButtonModule } from "primeng/button";
import { SelectButtonModule } from "primeng/selectbutton";
import { IconComponent } from "../icon/icon.component";
import { ChipModule } from "primeng/chip";
import { InputTextModule } from "primeng/inputtext";
import { InputGroupModule } from "primeng/inputgroup";
import { InputGroupAddonModule } from "primeng/inputgroupaddon";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta: Meta = {
    title: "Components/Table",
    decorators: [
        moduleMetadata({
            imports: [
                TableModule,
                CommonModule,
                BrowserAnimationsModule,
                FormsModule,
                ReactiveFormsModule,
                FloatLabelModule,
                CommonModule,
                TagModule,
                RatingModule,
                ButtonModule,
                SelectButtonModule,
                IconComponent,
                InputTextModule,
                InputGroupModule,
                InputGroupAddonModule,
                BadgeModule,
                ChipModule,
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
    // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
    // args: { onClick: fn() },
};

export default meta;
type Story = StoryObj;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Basic: Story = {
    args: {
        products: [
            {
                id: "1000",
                code: "f230fh0g3",
                name: "Bamboo Watch",
                description: "Product Description",
                image: "bamboo-watch.jpg",
                price: 65,
                category: "Accessories",
                quantity: 24,
                inventoryStatus: "INSTOCK",
                rating: 5,
            },
            {
                id: "1001",
                code: "f230fh0g3",
                name: "Black Watch",
                description: "Product Description",
                image: "Black-watch.jpg",
                price: 65,
                category: "Accessories",
                quantity: 20,
                inventoryStatus: "INSTOCK",
                rating: 5,
            },
        ],
    },
    render: (args) => ({
        props: {
            ...args,
        },
        template: `<p-table [value]="products" [tableStyle]="{ 'min-width': '50rem' }">
    <ng-template pTemplate="header">
        <tr>
            <th>Code</th>
            <th>Name</th>
            <th>Category</th>
            <th>Quantity</th>
        </tr>
    </ng-template>
    <ng-template pTemplate="body" let-product>
        <tr>
            <td>{{ product.code }}</td>
            <td>{{ product.name }}</td>
            <td>{{ product.category }}</td>
            <td>{{ product.quantity }}</td>
        </tr>
    </ng-template>
</p-table>`,
    }),
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

export const ForDataView: Story = {
    args: {
        products: [
            {
                id: 1,
                code: "f230fh0g3",
                name: "Darba dienas",
                slots: ["8:00 - 17:00 (8h 15min)", "18:00 - 23:00 (4h 45min)"],
                badgeName: "Parasts",
                badgeSeverity: "info",
                inventoryStatus: "Standarta",
                days: [1, 2, 3, 4, 5],
            },
            {
                id: 2,
                code: "f230fh0g3",
                name: "Citas foršas darba dienas",
                slots: ["8:00 - 17:00 (8h 15min)", "18:00 - 23:00 (4h 45min)"],
                badgeName: "Ideāls",
                badgeSeverity: "success",
                inventoryStatus: "Nestandarta",
                days: [1, 4, 5],
                dates: ["12.12.2024", "12.12.2024"],
            },
            {
                id: 3,
                code: "f230fh0g3",
                name: "Brīvdienas",
                slots: ["8:00 - 17:00 (8h 15min)", "18:00 - 23:00 (4h 45min)"],
                badgeName: "Nestandarta",
                badgeSeverity: "warning",
                inventoryStatus: "Standarta",
                days: [1, 5],
                dates: ["12.12.2024"],
            },
        ],
    },

    render: (args) => ({
        props: {
            ...args,
            getSeverity: (status: any) => new TableDemo().getSeverity(status),
        },
        template: `<p-table [value]="products" [tableStyle]="{'min-width': '60rem'}" class="data-table">

    <ng-template pTemplate="body" let-product>
        <tr>
            <td>
            <div class="flex flex-wrap  gap-2">

            <span
                                                    class="flex align-items-center justify-content-center font-semibold white-space-nowrap">{{product.name}}</span>
              <p-badge [value]="product.badgeName" [severity]="product.badgeSeverity"
                                                    class="flex align-items-center justify-content-center "
                                                    styleClass="text-xs font-normal"></p-badge>
                                                    </div>
            </td>

            <td>
                <div class="flex flex-wrap gap-2">




                                                <div class="p-buttonset daycalendar">
                                                    <p-button
                                                        *ngFor="let day of ['M', 'T', 'W', 'T', 'F', 'S', 'S']; let i = index"
                                                        type="button" [label]="day" size="small" severity="secondary"
                                                        [outlined]="!product.days.includes(i + 1)">
                                                    </p-button>
                                                </div>

                                                <div *ngFor="let date of product.dates" class="p-buttonset daycalendar">
                                                    <p-button type="button" [outlined]="true" [label]="date"
                                                        size="small"></p-button>
                                                    <p-button icon="pi pi-times" size="small" severity="secondary"
                                                        styleClass="w-3"></p-button>
                                                </div>




                                            </div>

            </td>
            <td>

              <div class="flex flex-wrap gap-2">
                                                <p-chip *ngFor="let slot of product.slots" [label]="slot"
                                                    styleClass="white-space-nowrap text-xs" />
                                            </div>

            </td>
            <td class="text-right">

            <td>
                                            <div
                                                class="flex w-full justify-content-between  gap-3 md:justify-content-end">
                                                <button aria-label="Edit"
                                                    class="p-button p-button-lg p-button-secondary p-1 p-button-text text-gray-800">
                                                    <span class="material-symbols-rounded text-2xl">
                                                        edit
                                                    </span>
                                                </button>

                                                <button aria-label="Delete"
                                                    class="p-button p-button-danger p-button-lg p-1 p-button-text text-gray-800">
                                                    <span class="material-symbols-rounded text-2xl">
                                                        delete
                                                    </span>
                                                </button>
                                            </div>


            </td>

        </tr>
    </ng-template>

</p-table>
`,
    }),
};
