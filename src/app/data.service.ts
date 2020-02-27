import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private REST_API_SERVER = 'http://localhost:3000/items';

  constructor(private httpClient: HttpClient) { }

  public getItems() {
    return this.httpClient.get(this.REST_API_SERVER);
  }

  public getItemDetails(id: string): Observable<any> {
    return this.httpClient.get(`${this.REST_API_SERVER}/${id}`);
  }
}
