import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  show: boolean;

  constructor() { }

  ngOnInit() {
  }

  menuToggle() {
    console.log('toggle');
    this.show = !this.show;
  }
}
