import { Component, Input, OnInit } from '@angular/core';
import { Item } from '../item/item';

@Component({
  selector: 'app-level',
  templateUrl: './level.component.html',
  styleUrls: ['./level.component.scss']
})

export class LevelComponent implements OnInit {
  @Input() items: Item[];

  constructor() { }

  ngOnInit() {
  }

}
