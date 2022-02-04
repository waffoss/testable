import { createAction, props } from "@ngrx/store";
import { CatFact } from "src/app/models/catfact.model";

export enum CatsActionTypes {
    GET_CAT_DATA = 'get/cat/data'
}

export const retrievedCatData = createAction(
    CatsActionTypes.GET_CAT_DATA,
    props<{ catData: CatFact }>()
);