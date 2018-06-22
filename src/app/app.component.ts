import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  username: string = '';
  isToggleSecret: boolean = false;
  logs = [];

  onResetUsername = () => {
    this.username = '';
  };

  onToggleSecret = () => {
    this.isToggleSecret = !this.isToggleSecret;
    this.logs.push(new Date().getTime());
  };
}
