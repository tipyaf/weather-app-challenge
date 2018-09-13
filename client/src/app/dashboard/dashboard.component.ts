import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  isSideNavOpened: boolean;
  menusList: any = [];

  constructor(private router: Router) {
    // listen router to close menu when router changes
    this.router.events
      .subscribe(event => {
        if (event instanceof NavigationEnd) {
          this.closeSideNav();
        }
      });
  }

  /////////////

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

  //////////////

  closeSideNav() {
    this.isSideNavOpened = false;
  }

  toggleNav() {
    this.isSideNavOpened = !this.isSideNavOpened;
  }
}
