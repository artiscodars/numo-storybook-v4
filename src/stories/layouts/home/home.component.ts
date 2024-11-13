import { Component, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { HeaderComponent } from "../../components/header/header.component";
import { DashboardComponent } from "../dashboard/dashboard.component";
import { Menu } from "../../components/left-menu/menu.model";
import { CardModule } from "primeng/card";
import { CommonModule } from "@angular/common";
import { LeftMenuComponent } from "../../components/left-menu/left-menu.component";

@Component({
    // selector: "numo-home",
    standalone: true,
    imports: [
        RouterOutlet,
        HeaderComponent,
        DashboardComponent,
        CardModule,
        CommonModule,
        LeftMenuComponent,
    ],
    templateUrl: "./home.template.html",
    styles: [
        `
            .container {
                display: flex;
                grid-gap: 20px;
                margin-top: 20px;
            }

            .menu {
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                flex: 1;
                max-width: 230px;
                @media (max-width: var(--breakpoint)) {
                    display: none;
                }
            }

            .dashboard {
                flex: 1;
            }

            :host ::ng-deep .p-card .p-card-content {
                padding: 5px;
            }
        `,
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppComponent {
    isMenuVisible = false;
    title = "angular-latest";
    items = [{ label: "UZDEVUMI", menu: [...Menu] }];

    toggleMenu(isMenuVisible: boolean) {
        this.isMenuVisible = isMenuVisible;
    }
}
