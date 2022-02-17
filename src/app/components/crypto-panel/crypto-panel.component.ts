import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectCryptoData } from 'src/app/store/crypto/crypto.selectors';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';

@Component({
  selector: 'app-crypto-panel',
  templateUrl: './crypto-panel.component.html',
  styleUrls: ['./crypto-panel.component.scss'],
  animations: [
    trigger('openClose', [
      state('open', style({
        backgroundColor: '#424242',
        opacity: 1
      })),
      state('close', style({
        backgroundColor: '#424242',
        opacity: 0
      })),
      transition('open => close', [
        animate('4s ease-in')
      ]),
      transition('close => open', [
        animate('4s ease-out')
      ]),
    ]),
    trigger('spinIt', [
      state('flip', style({
        transform: 'rotate(0deg)'
      })),
      state('normal', style({
        transform: 'rotate(360deg)'
      })),
      transition('normal => flip', [
        style({ transform: 'rotate(-360deg)' }),
        animate('1s ease-out')
      ]),
      transition('flip => normal', animate('1s ease-in'))
    ])
  ]
})
export class CryptoPanelComponent implements OnInit, AfterViewInit {

  bitcoinPrice$ = this.store.select(selectCryptoData)
  isOpen: boolean = false;

  constructor(private store: Store) { }

  ngOnInit(): void {

  }

  ngAfterViewInit(): void {
    this.toggleAnim()
  }

  toggleAnim() {
    this.isOpen = !this.isOpen;
  }
}
