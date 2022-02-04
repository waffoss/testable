import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CryptoService {

  constructor(private http: HttpClient) { }

  getCryptoData(): Observable<any> {
    return this.http.get("https://api.coindesk.com/v1/bpi/currentprice.json")
  }
}
