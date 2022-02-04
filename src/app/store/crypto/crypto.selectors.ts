import { createFeatureSelector } from "@ngrx/store";
import { CryptoState } from "src/app/models/crypto.model";

export const selectCryptoData = createFeatureSelector<CryptoState>('cryptoData')