import { ErrorHandler, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GlobalErrorHandler } from './errors/global-error-handler';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpLoadingInterceptor } from './errors/http-loading.interceptor';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [{
    provide: ErrorHandler,
    useClass: GlobalErrorHandler
  }, { provide: HTTP_INTERCEPTORS, useClass: HttpLoadingInterceptor, multi: true }]
})
export class CoreModule { }
