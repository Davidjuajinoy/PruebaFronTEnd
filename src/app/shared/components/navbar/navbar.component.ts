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
      { text: 'Home', patch:'/' },
      { text: 'About', patch:'/' },
      { text: 'Service', patch:'/' },
      { text: 'Contact', patch:'/' }
    ]
  }

}
