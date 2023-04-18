import {createAction} from '@reduxjs/toolkit';
import{ Offers } from '../types/offers';
import { City } from '../types/cities';
import { Sort } from '../types/sorting';

export const Action = {
  CHANGE_CITY: 'CHANGE_CITY',
  FILL_OFFERS: 'FILL_OFFERS',
};

export const changeCity = createAction<{currentCity: City}>(Action.CHANGE_CITY);
export const fillOffers = createAction<{offers: Offers}>(Action.FILL_OFFERS);

export const openSorting = createAction('offers/openSorting');
export const changeSorting = createAction('offers/changeSorting', (sorting: Sort) => ({
  payload:sorting
}));
