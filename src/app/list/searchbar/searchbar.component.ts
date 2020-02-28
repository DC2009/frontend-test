import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.scss']
})
export class SearchbarComponent implements OnInit {

  searchControl = new FormControl('');

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.searchControl.valueChanges.subscribe(userInput => {
      this.filterItems(userInput);
    });
  }

  filterItems(input: string) {
    console.log(input);
    this.dataService.setSelectedItem(input
      ? this.dataService.items.find(i => i.title.toLowerCase() === input.toLowerCase())
      : null
    );
    console.log(this.dataService.getSelectedItem());
  }

}
