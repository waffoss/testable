import { Injectable } from "@angular/core";
import { State, Store } from "@ngrx/store";
import { Actions, createEffect, ofType } from "@ngrx/effects"
import { CryptoActionTypes } from "./crypto.actions";
import { catchError, EMPTY, map, mergeMap } from "rxjs";
import { CryptoService } from "src/app/services/crypto/crypto.service";

@Injectable()
export class CryptoEffects {

    constructor(private actions$: Actions, private cryptoService: CryptoService) { }

    getCryptoData$ = createEffect(() => this.actions$.pipe(
        ofType(CryptoActionTypes.GET_CRYPTO_DATA),
        mergeMap(() => this.cryptoService.getCryptoData()
            .pipe(
                map(cryptoData => ({ type: CryptoActionTypes.GET_CRYPTO_DATA, payload: cryptoData })),
                catchError(() => EMPTY)
            ))
    ));
}