import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Inbox', url: '/folder/Inbox', icon: 'mail' },
    { title: 'Madlib', url: '/folder/madlib/madlib', icon: 'newspaper-outine'},
    { title: 'Test Average Hw1_10', url: '/folder/hw1_10/hw1Prob10', icon: 'analytics'}

  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}
