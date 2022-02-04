import { createReducer, on } from "@ngrx/store";
import { CryptoState } from "src/app/models/crypto.model";
import { retrievedCryptoData } from "./crypto.actions";

export const initialState: CryptoState = {
    bpi: {
        EUR: {
            code: "",
            description: "",
            rate: "",
            rate_float: 0,
            symbol: ""
        },
        GBP: {
            code: "",
            description: "",
            rate: "",
            rate_float: 0,
            symbol: ""
        },
        USD: {
            code: "",
            description: "",
            rate: "",
            rate_float: 0,
            symbol: ""
        }
    },
    chartName: "",
    disclamer: "",
    time: {
        updated: "",
        updatedISO: "",
        updateduk: ""
    }
} as CryptoState;

export const cryptoReducer = createReducer(
    initialState,
    on(retrievedCryptoData, (state, { cryptoData }) => cryptoData)
)

