import { Injectable } from '@angular/core';
import { MatDialog } from "@angular/material/dialog";
import { DialogComponent } from './errors/dialog/dialog.component';

@Injectable({
  providedIn: 'root'
})
export class ErrorDialogService {

  opened: boolean = false;

  constructor(private dialog: MatDialog) { }

  openDialog(message: string, status?: number): void {
    if (!this.opened) {
      this.opened = true;
      const dialogRef = this.dialog.open(DialogComponent, {
        data: { message, status },
        maxHeight: '100%',
        width: '540px',
        maxWidth: '100%',
        disableClose: true,
        hasBackdrop: true,
      })
      dialogRef.afterClosed().subscribe(() => {
        this.opened = false;
      })
    }
  }
}
