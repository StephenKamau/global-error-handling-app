import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'global-error-handling-app';
  constructor(private http: HttpClient) { }
  
  localError(): void{
    throw Error('App component error');
  }

  failingRequest(): void{
    this.http.get('https://httpstat.us/404?sleep=2000').toPromise();
  }

  successfulRequest(): void{
    this.http.get('https://httpstat.us/200?sleep=2000').toPromise();
  }
}
