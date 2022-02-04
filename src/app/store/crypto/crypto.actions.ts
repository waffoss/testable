import { createAction, props } from "@ngrx/store";
import { CryptoState } from "src/app/models/crypto.model";

export enum CryptoActionTypes {
    GET_CRYPTO_DATA = 'get/crypto/data'
}

export const retrievedCryptoData = createAction(
    CryptoActionTypes.GET_CRYPTO_DATA,
    props<{ cryptoData: CryptoState }>()
);