import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { Item } from './list/item/item';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  items: Item[] = [];
  private selectedItem: BehaviorSubject<Item>;

  private REST_API_SERVER = 'http://localhost:3000/items';

  constructor(private httpClient: HttpClient) {
    this.selectedItem = new BehaviorSubject<Item>(null);
  }

  public getItems(): Observable<Item[]> {
    return this.httpClient.get<Item[]>(this.REST_API_SERVER);
  }

  public getItemDetails(id: string): Observable<Item> {
    return this.httpClient.get<Item>(`${this.REST_API_SERVER}/${id}`);
  }

  public getSelectedItem(): Observable<Item> {
    return this.selectedItem.asObservable();
  }

  public setSelectedItem(newItem) {
    this.selectedItem.next(newItem);
  }
}
