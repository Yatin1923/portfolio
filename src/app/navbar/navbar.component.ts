import { animate, query, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
 
})
export class NavbarComponent {
  collapsed = true;
  showNav = true;
  hideNav = true;
  toggleCollapsed(): void {
    this.collapsed = !this.collapsed;
    this.hideNav = this.collapsed;
    this.showNav =!this.collapsed;
  }
}
