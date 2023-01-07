import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogComponent } from './errors/dialog/dialog.component';
import { LoadingDialogComponent } from './loading/loading-dialog/loading-dialog.component';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../material/material.module'
import { ErrorDialogService } from './error-dialog.service';
import { LoadingDialogService } from './loading/loading-dialog.service';



@NgModule({
  declarations: [
    DialogComponent,
    LoadingDialogComponent
  ],
  imports: [
    CommonModule, RouterModule, MaterialModule
  ],
  providers: [ErrorDialogService, LoadingDialogService],
})
export class SharedModule { }
