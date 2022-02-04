interface CurrencyData {
    code: string;
    description: string
    rate: string;
    rate_float: number;
    symbol: string;
}

interface Bpi {
    EUR: CurrencyData;
    GBP: CurrencyData;
    USD: CurrencyData;
}

interface TimeData {
    updated: string;
    updatedISO: string;
    updateduk: string;
}
 export interface CryptoState{
    bpi: Bpi;
    chartName: string;
    disclamer: string;
    time: TimeData
 }