import { BeersState } from './beers.state-type';
import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';
import { beersReducer } from './beers.reducer';

export interface DrinksState {
  beersState: BeersState;
}

export const beersReducers: ActionReducerMap<DrinksState> | any = {
  beersState: beersReducer,
};

export const getDrinksState = createFeatureSelector<DrinksState>('drinks');
