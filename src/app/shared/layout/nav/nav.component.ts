import { Component } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css',
})
export class NavComponent {
  staticLocation = 'Mohammadpur Bus Stand, Dhaka';
  isSideBarOpened = false;

  openSideBar() {
    this.isSideBarOpened=!this.isSideBarOpened;
  }
}
