import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Item } from './list/item/item';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private REST_API_SERVER = 'http://localhost:3000/items';

  constructor(private httpClient: HttpClient) { }

  public getItems(): Observable<Item[]> {
    return this.httpClient.get<Item[]>(this.REST_API_SERVER);
  }

  public getItemDetails(id: string): Observable<Item> {
    return this.httpClient.get<Item>(`${this.REST_API_SERVER}/${id}`);
  }
}
