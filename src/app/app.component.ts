import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { concat, map, merge, mergeMap, Observable, of, pipe, switchMap } from 'rxjs';
import { CatService } from './services/cat/cat.service';
import { CryptoService } from './services/crypto/crypto.service';
import { FacadeService } from './services/facade.service';
import { retrievedCatData } from './store/cats/cats.actions';
import { retrievedCryptoData } from './store/crypto/crypto.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private facade: FacadeService, private store: Store) { }

  ngOnInit(): void {
    this.facade.getCryptoData().subscribe((cryptoData) => this.store.dispatch(retrievedCryptoData({ cryptoData })))
    this.facade.getCatFact().subscribe((catData) => this.store.dispatch(retrievedCatData({ catData })))

  }

}
