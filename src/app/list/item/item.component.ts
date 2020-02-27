import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Item } from './item';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
  @Input() item: Item;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  gotoDetails(item: Item) {
    this.router.navigate(['items', this.item.id]);
  }

}
