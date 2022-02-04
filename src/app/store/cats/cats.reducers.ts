import { createReducer, on } from "@ngrx/store";
import { CatFact } from "src/app/models/catfact.model";
import { retrievedCatData } from "./cats.actions";


export const initialState: CatFact = {
    fact: "",
    length: 0
} as CatFact

export const catReducer = createReducer(
    initialState, 
    on(retrievedCatData, (state, { catData }) => catData))