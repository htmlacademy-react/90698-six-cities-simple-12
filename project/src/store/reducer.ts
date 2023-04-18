import { createReducer } from '@reduxjs/toolkit';
import { offers } from '../mocks/offers';
import { cities } from '../mocks/cities';
import { changeCity, fillOffers, openSorting, changeSorting } from './action';
import { SORTING_TYPE } from '../const';

const initialState = {
  currentCity: cities.filter((city) => city.title === 'Paris')[0],
  offers,
  isOpenSort: false,
  sorting: SORTING_TYPE[0],
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      const {currentCity} = action.payload;
      state.currentCity = currentCity;
    })
    .addCase(fillOffers, (state) => {
      state.offers = offers;
    })
    .addCase(openSorting, (state) => {
      state.isOpenSort = !state.isOpenSort;
    })
    .addCase(changeSorting, (state, action) => {
      state.sorting = action.payload;
      state.isOpenSort = !state.isOpenSort;
    });
});

export {reducer};
