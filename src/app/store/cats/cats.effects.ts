import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, EMPTY, map, mergeMap } from "rxjs";
import { CatService } from "src/app/services/cat/cat.service";
import { CatsActionTypes } from "./cats.actions";

@Injectable()
export class CatsEffects {
    constructor(private actions$: Actions, private catsSerivce: CatService) { }

    getCatData$ = createEffect(() => this.actions$.pipe(
        ofType(CatsActionTypes.GET_CAT_DATA),
        mergeMap(() => this.catsSerivce.getCatFact()
            .pipe(map(catData => ({ type: CatsActionTypes.GET_CAT_DATA, payload: catData }),
                catchError(() => EMPTY))
            ))
    ));
}