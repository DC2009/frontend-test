import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Item } from '../item';
import { DataService } from 'src/app/data.service';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  item: Item;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private dataService: DataService
  ) {}

  ngOnInit() {
    this.route.paramMap.pipe(
      switchMap(params => {
        return this.dataService.getItemDetails(params.get('id'));
      })
    ).subscribe(i => this.item = i);
  }

  gotoList() {
    this.router.navigate(['items']);
  }
}
