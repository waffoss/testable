import { createFeatureSelector } from "@ngrx/store";
import { CatFact } from "src/app/models/catfact.model";

export const selectCatsData = createFeatureSelector<CatFact>('catData')