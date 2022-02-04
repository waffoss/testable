import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatService } from './cat/cat.service';
import { CryptoService } from './crypto/crypto.service';
import { FacadeService } from './facade.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    CatService,
    CryptoService,
    FacadeService
  ]
})
export class ServicesModule { }
