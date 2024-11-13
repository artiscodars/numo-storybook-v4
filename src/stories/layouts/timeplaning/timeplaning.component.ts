import { Component, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { HeaderComponent } from "../../components/header/header.component";
import { DashboardComponent } from "../dashboard/dashboard.component";
import { Menu } from "../../components/left-menu/menu.model";
import { CardModule } from "primeng/card";
import { CommonModule } from "@angular/common";
import { LeftMenuComponent } from "../../components/left-menu/left-menu.component";
import { BreadcrumbModule } from "primeng/breadcrumb";
import { IconComponent } from "../../components/icon/icon.component";
import { DropdownModule } from "primeng/dropdown";
import { CalendarModule } from "primeng/calendar";
import { TabViewModule } from "primeng/tabview";
import { MenuModule } from "primeng/menu";
import { ButtonModule } from "primeng/button";
import { BadgeModule } from "primeng/badge";
import { CheckboxModule } from "primeng/checkbox";
import {
    MenuItem,
    TableData,
    TableData2,
    Products,
    TimePlanning,
} from "./timeplanning.data";
import { TableModule } from "primeng/table";
import { InputGroupModule } from "primeng/inputgroup";
import { InputGroupAddonModule } from "primeng/inputgroupaddon";
import { ChipModule } from "primeng/chip";

@Component({
    // selector: "numo-timeplaning",
    standalone: true,
    imports: [
        RouterOutlet,
        HeaderComponent,
        DashboardComponent,
        CardModule,
        CommonModule,
        LeftMenuComponent,
        BreadcrumbModule,
        IconComponent,
        DropdownModule,
        CalendarModule,
        IconComponent,
        TabViewModule,
        MenuModule,
        ButtonModule,
        TableModule,
        BadgeModule,
        InputGroupModule,
        InputGroupAddonModule,
        ChipModule,
        CheckboxModule,
    ],
    templateUrl: "./timeplaning.template.html",

    schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppComponent {
    isMenuVisible = false;
    title = "angular-latest";
    expandedRows: any[] = [];
    items = [{ label: "UZDEVUMI", menu: [...Menu] }];
    home = { icon: "pi pi-home", route: "/" };
    date: Date[] | undefined;
    tableData = TableData;
    tableData2 = TableData2;
    Products = Products;
    menuItems = MenuItem;
    timePlanning = TimePlanning;

    // Sum of planning hours for all employees
    get totalPlanningHours(): number {
        return this.timePlanning.reduce(
            (sum, emp) => sum + emp.planningHours,
            0,
        );
    }

    // Sum of total hours for all employees
    get totalHours(): number {
        return this.timePlanning.reduce((sum, emp) => sum + emp.totalHours, 0);
    }

    // Total hours per day across all employees
    get dailyTotals(): number[] {
        if (this.timePlanning.length === 0) return [];
        const daysInMonth = this.timePlanning[0].daysOfMonth.length;

        return Array.from({ length: daysInMonth }, (_, dayIndex) =>
            this.timePlanning.reduce(
                (sum, emp) => sum + (emp.daysOfMonth[dayIndex]?.hours || 0),
                0,
            ),
        );
    }

    // Method to toggle row expansion
    toggleRow(product: any) {
        const index = this.expandedRows.indexOf(product.id);
        if (index !== -1) {
            // Row is already expanded, so collapse it
            this.expandedRows.splice(index, 1);
        } else {
            // Row is not expanded, so expand it
            this.expandedRows.push(product.id);
        }
    }

    // Method to check if a row is expanded
    isRowExpanded(product: any): boolean {
        return this.expandedRows.includes(product.id);
    }
    options = [
        {
            name: "Barona ielas veikals",
        },
    ];
    breadCrumbItems = [
        { label: "Darba laika plānošana", route: "/timeplaning" },
    ];

    itemsWithIsLast = this.breadCrumbItems.map((item, index, array) => ({
        ...item,
        isLast: index === array.length - 1,
    }));
}
