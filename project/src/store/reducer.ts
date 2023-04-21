import { createReducer } from '@reduxjs/toolkit';
import { changeCity, loadOffers, setOffersLoadingStatus, openSorting, changeSorting } from './action';
import { SORTING_TYPE } from '../const';
import { Offers } from '../types/offers';
import { Sort } from '../types/sorting';

type InitialStateProps = {
  currentCity: string;
  offers: Offers | [];
  areOffersLoading: boolean;
  isOpenSort: boolean;
  sorting: Sort;
  }


const initialState: InitialStateProps = {
  currentCity: 'Paris',
  offers: [],
  areOffersLoading: false,
  isOpenSort: false,
  sorting: SORTING_TYPE[0],
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.currentCity = action.payload;
    })
    .addCase(loadOffers, (state, action) => {
      state.offers = action.payload;
    })
    .addCase(setOffersLoadingStatus, (state, action) => {
      state.areOffersLoading = action.payload;
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
