import { ErrorHandler, Injectable, NgZone } from "@angular/core";
import { HttpErrorResponse } from "@angular/common/http";
import { ErrorDialogService } from "../../shared/error-dialog.service";

@Injectable()
export class GlobalErrorHandler implements ErrorHandler {
    constructor(private errorDialogService: ErrorDialogService, private zone: NgZone) { }
    handleError(error: any): void {
        if (!(error instanceof HttpErrorResponse)) {
            error = error.rejection;
        }
        this.zone.run(() => {
            this.errorDialogService.openDialog(error?.message || 'Undefined client error', error?.status);
        });
    }
}