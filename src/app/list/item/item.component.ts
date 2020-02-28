import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Item } from './item';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
  @Input() item: Item;

  selected = false;

  constructor(private router: Router, private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getSelectedItem().subscribe(item => {
      this.selected = item && item.id === this.item.id;
      console.log('selected', this.selected, this.item.id);
    });
  }

  gotoDetails() {
    this.router.navigate(['items', this.item.id]);
  }

}
