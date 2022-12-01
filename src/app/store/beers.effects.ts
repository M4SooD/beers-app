import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap } from 'rxjs/operators';
import {
  FETCH_BEERS_REQUEST,
  FETCH_BEER_REQUEST,
  fetchBeerResponse,
  fetchBeersListFailed,
  fetchBeersListResponse,
} from './beers.action';
import { BeersService } from '../beerlist/beers.service';
import { GenericAction } from '../models';
import { of } from 'rxjs';

@Injectable()
export class BeersEffects {
  constructor(private actions$: Actions, private beersService: BeersService) {}

  fetchBeers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(FETCH_BEERS_REQUEST),
      switchMap((action: GenericAction) =>
        this.beersService.getBeers(action.payload)
      ),
      map((res) => fetchBeersListResponse(res)),
      catchError(() => of(fetchBeersListFailed()))
    )
  );

  fetchBeer$ = createEffect(() =>
    this.actions$.pipe(
      ofType(FETCH_BEER_REQUEST),
      switchMap((action) => this.beersService.getBeer((action as any).payload)),
      map((res) => fetchBeerResponse(res)),
      catchError(() => of(fetchBeersListFailed()))
    )
  );
}
