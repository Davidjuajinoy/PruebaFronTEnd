import { Component, OnInit } from '@angular/core';
import { MenuItem } from '@core/interfaces/navbar.interface';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  menuItem: MenuItem[] = []

  constructor() { }

  ngOnInit(): void {
    this.menuItem = [
      { text: 'Home', patch:'/filter' },
      { text: 'About', patch:'/filter' },
      { text: 'Service', patch:'/filter' },
      { text: 'Contact', patch:'/filter' }
    ]
  }

}
