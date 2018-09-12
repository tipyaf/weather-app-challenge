import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  isSideNavOpened: boolean;
  menusList: any = [];

  constructor() { }

  ngOnInit() {
    this.isSideNavOpened = false;
    this.menusList = [
      {
        label: 'Settings',
        icon: 'settings',
        link: '/dashboard/settings'
      },
      {
        label: 'Weather',
        icon: 'wb_sunny',
        link: '/dashboard/weather'
      }
    ];
  }

  toogleNav() {
    this.isSideNavOpened = !this.isSideNavOpened;
  }

}
