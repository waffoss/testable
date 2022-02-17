import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription, switchMap, timer } from 'rxjs';
import { FacadeService } from './services/facade.service';
import { retrievedCatData } from './store/cats/cats.actions';
import { retrievedCryptoData } from './store/crypto/crypto.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {

  cryptoDataSubscribtion: Subscription = new Subscription;

  constructor(private facade: FacadeService, private store: Store) { }


  ngOnInit(): void {
    this.cryptoDataSubscribtion = timer(0, 100000).pipe(switchMap(_ => this.facade.getCryptoData())).subscribe((cryptoData) => this.store.dispatch(retrievedCryptoData({ cryptoData })))
    this.facade.getCatFact().subscribe((catData) => this.store.dispatch(retrievedCatData({ catData })))
  }

  ngOnDestroy(): void {
    this.cryptoDataSubscribtion.unsubscribe()
  }


}
