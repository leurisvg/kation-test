import { Component, OnInit } from '@angular/core';

import { ClientAddressService } from './services/client-address.service';
import { ClientAddress } from './interfaces/client-address.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  title = 'Kation Test';

  clientsAddresses!: ClientAddress[];

  constructor(private clientAddressService: ClientAddressService) {}

  ngOnInit(): void {
    this.clientAddressService.getClientAddrees()
      .subscribe(resp => this.clientsAddresses = resp);
  }
}
