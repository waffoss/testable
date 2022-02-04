import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { CryptoService } from 'src/app/services/crypto/crypto.service';
import { retrievedCryptoData } from 'src/app/store/crypto/crypto.actions';
import { selectCryptoData } from 'src/app/store/crypto/crypto.selectors';

@Component({
  selector: 'app-crypto-panel',
  templateUrl: './crypto-panel.component.html',
  styleUrls: ['./crypto-panel.component.scss']
})
export class CryptoPanelComponent implements OnInit {

  bitcoinPrice$ = this.store.select(selectCryptoData)

  constructor(private store: Store) { }

  ngOnInit(): void {
   
  }

}
