import {createAction} from '@reduxjs/toolkit';
import{ Offers } from '../types/offers';
import { City } from '../types/cities';

export const Action = {
  CHANGE_CITY: 'CHANGE_CITY',
  FILL_OFFERS: 'FILL_OFFERS',
};

export const changeCity = createAction<{currentCity: City}>(Action.CHANGE_CITY);
export const fillOffers = createAction<{offers: Offers}>(Action.FILL_OFFERS);
