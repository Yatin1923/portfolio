import { animate, query, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
 
})
export class NavbarComponent {
  collapsed = true;
  
  toggleCollapsed(): void {
    this.collapsed = !this.collapsed;
  }
  
  // toggleTheme():void{
  //   var root = document.querySelector(':root');
  //   var theme:CSSStyleDeclaration;
  //   theme  = getComputedStyle(root);
  //   document.documentElement.style.setProperty(`--cardColour`, '#555555');
  //   document.documentElement.style.setProperty(`--secondaryText`, '#555555');
  //   document.documentElement.style.setProperty(`--primaryText`, '#555555');
  //   document.documentElement.style.setProperty(`--btnColour`, '#555555');
  // }
}
