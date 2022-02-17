import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostsComponent } from './components/posts/posts.component';
import { cryptoReducer } from './store/crypto/crypto.reducers';
import { CryptoPanelComponent } from './components/crypto-panel/crypto-panel.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { catReducer } from './store/cats/cats.reducers';
import { ServicesModule } from './services/services.module';

@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    CryptoPanelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MaterialModule,
    StoreModule.forRoot({cryptoData: cryptoReducer, catData: catReducer}),
    StoreDevtoolsModule.instrument({maxAge: 10}),
    BrowserAnimationsModule,
    ServicesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
