import { Injectable, Injector } from '@angular/core';
import { CatService } from './cat/cat.service';
import { CryptoService } from './crypto/crypto.service';

@Injectable({
  providedIn: 'root'
})
export class FacadeService {

  private _catService!: CatService;
  public get catService(): CatService{
    if(!this._catService){
      this._catService = this.injector.get(CatService)
    }

    return this._catService;
  }

  private _cryptoService!: CryptoService;
  public get cryptoService(): CryptoService{
    if(!this._cryptoService){
      this._cryptoService = this.injector.get(CryptoService);
    }

    return this._cryptoService;
  }

  constructor(private injector: Injector) { }

  getCatFact(){
    return this.catService.getCatFact();
  }

  getCryptoData(){
    return this.cryptoService.getCryptoData();
  }
}
