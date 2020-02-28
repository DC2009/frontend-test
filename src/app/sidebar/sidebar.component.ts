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
    this.show = !this.show;
  }
}
