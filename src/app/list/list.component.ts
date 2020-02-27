import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Item } from './item/item';

function dataArrayToTree(data: Item[]) {
  const itemsMap = {};
  const list = data.map(i => ({
    ...i,
    children: []
  }));

  for (let i = 0; i < list.length; i ++) {
      itemsMap[list[i].id] = i;
  }

  const roots: Item[] = [];

  for (const item of list) {
      if (item.parent_id) {
          list[itemsMap[item.parent_id]].children.push(item);
      } else {
          roots.push(item);
      }
  }

  return roots;
}


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  items: Item[] = [];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getItems().subscribe((data: Item[]) => {
      this.items = dataArrayToTree(data);
    });
  }

}
