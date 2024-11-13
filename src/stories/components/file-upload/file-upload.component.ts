import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import {
    ConfirmationService,
    MessageService,
    PrimeNGConfig,
} from "primeng/api";
import { BadgeModule } from "primeng/badge";
import { ButtonModule } from "primeng/button";
import { ConfirmDialogModule } from "primeng/confirmdialog";
import { FileUploadModule } from "primeng/fileupload";
import { ToastModule } from "primeng/toast";

@Component({
    selector: "p-file-upload",
    imports: [
        CommonModule,
        ToastModule,
        FormsModule,
        ReactiveFormsModule,
        ButtonModule,
        FileUploadModule,
        BadgeModule

    ],
    templateUrl: "./file-upload.component.html",
    standalone: true,
})
export class FileUploadComponent {
    files = [];

    totalSize: number = 0;

    totalSizePercent: number = 0;

    constructor(
        private config: PrimeNGConfig,
        private messageService: MessageService,
    ) {}

    choose(event: any, callback: any) {
        callback();
    }

    onRemoveTemplatingFile(
        event: any,
        file: any,
        removeFileCallback: any,
        index: any,
    ) {
        removeFileCallback(event, index);
        this.totalSize -= parseInt(this.formatSize(file.size));
        this.totalSizePercent = this.totalSize / 10;
    }

    onClearTemplatingUpload(clear: any) {
        clear();
        this.totalSize = 0;
        this.totalSizePercent = 0;
    }

    onTemplatedUpload() {
        this.messageService.add({
            severity: "info",
            summary: "Success",
            detail: "File Uploaded",
            life: 3000,
        });
    }

    onSelectedFiles(event: any) {
        this.files = event.currentFiles;
        this.files.forEach((file: any) => {
            this.totalSize += parseInt(this.formatSize(file.size));
        });
        this.totalSizePercent = this.totalSize / 10;
    }

    uploadEvent(callback: any) {
        callback();
    }

    formatSize(bytes: any) {
        const k = 1024;
        const dm = 3;
        const sizes = this.config.translation.fileSizeTypes as any;
        if (bytes === 0) {
            return `0 ${sizes[0]}`;
        }

        const i = Math.floor(Math.log(bytes) / Math.log(k));
        const formattedSize = parseFloat((bytes / Math.pow(k, i)).toFixed(dm));

        return `${formattedSize} ${sizes[i]}`;
    }
}
