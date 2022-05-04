import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { ClientAddress } from '../interfaces/client-address.interface';

@Injectable({
  providedIn: 'root'
})
export class ClientAddressService {

  constructor(private http: HttpClient) { }

  getClientAddrees(): Observable<ClientAddress[]> {
    return this.http.get<ClientAddress[]>('http://localhost:3000/data');
  }
}
