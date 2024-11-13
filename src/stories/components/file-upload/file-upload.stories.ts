import type { Meta, StoryObj } from "@storybook/angular";
import { moduleMetadata } from "@storybook/angular";
import description from "./file-upload.description.md"; // Import the markdown file
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ButtonModule } from "primeng/button";
import { ToastModule } from "primeng/toast";
import { ConfirmationService, MessageService } from "primeng/api";
import { FileUploadModule } from "primeng/fileupload";
import { HttpClientModule } from "@angular/common/http";
import { FileUploadComponent } from "./file-upload.component";
import { BadgeModule } from "primeng/badge";

const meta: Meta = {
    title: "Components/Form/FileUpload",
    component: FileUploadComponent,
    decorators: [
        moduleMetadata({
            imports: [
                BrowserAnimationsModule,
                FormsModule,
                ReactiveFormsModule,
                ButtonModule,
                ToastModule,
                FileUploadModule,
                HttpClientModule,
                BadgeModule,
            ],
            providers: [ConfirmationService, MessageService],
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
        onUpload: (event: any) => {},
    },
    render: (args) => ({
        props: {
            ...args,
        },
        template: `<p-fileUpload
        mode="basic"
        chooseLabel="Choose"
        chooseIcon="pi pi-upload"
        name="demo[]"
        url="https://www.primefaces.org/cdn/api/upload.php"
        accept="image/*"
        maxFileSize="1000000"
        (onUpload)="onUpload($event)" /> `,
    }),
};
export const auto: Story = {
    args: {
        onUpload: (event: any) => {},
    },
    render: (args) => ({
        props: {
            ...args,
        },
        template: `  <p-fileUpload
        mode="basic"
        name="demo[]"
        chooseIcon="pi pi-upload"
        url="https://www.primefaces.org/cdn/api/upload.php"
        accept="image/*" maxFileSize="1000000"
        (onUpload)="onBasicUploadAuto($event)"
        [auto]="true"
        chooseLabel="Browse" />`,
    }),
};
export const Template: Story = {
    args: {},
    render: (args) => ({
        props: {
            ...args,
        },
        template: `<p-file-upload></p-file-upload>`,
    }),
};
export const Advance: Story = {
    args: {
        uploadedFiles: [],
    },
    render: (args) => ({
        props: {
            ...args,
            onUpload(event: any) {
                for (let file of event.files) {
                    args["uploadedFiles"].push(file);
                }
            },
        },
        template: `<p-fileUpload
        name="demo[]"
        url="https://www.primefaces.org/cdn/api/upload.php"
        (onUpload)="onUpload($event)"
        [multiple]="true"
        accept="image/*"
        maxFileSize="1000000">
            <ng-template pTemplate="content">
                <ul *ngIf="uploadedFiles.length">
                    <li *ngFor="let file of uploadedFiles">
                        {{ file.name }} - {{ file.size }} bytes
                    </li>
                </ul>
            </ng-template>
    </p-fileUpload>
`,
    }),
};
