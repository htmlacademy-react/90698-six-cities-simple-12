import { createReducer } from '@reduxjs/toolkit';
import { changeCity, loadOffers, setOffersLoadingStatus, openSorting, changeSorting, setAuthorizationStatus, setError, setUserInfo } from './action';
import { SORTING_TYPE } from '../const';
import { Offers } from '../types/offers';
import { Sort } from '../types/sorting';
import { AuthorizationStatus } from '../const';
import { UserInfo } from '../types/authorization';

type InitialStateProps = {
  currentCity: string;
  offers: Offers | [];
  areOffersLoading: boolean;
  isOpenSort: boolean;
  sorting: Sort;
  authorizationStatus: AuthorizationStatus;
  error: string | null;
  userInfo: Omit<UserInfo, 'token'> | undefined;
  }


const initialState: InitialStateProps = {
  currentCity: 'Paris',
  offers: [],
  areOffersLoading: false,
  isOpenSort: false,
  sorting: SORTING_TYPE[0],
  authorizationStatus: AuthorizationStatus.Unknown,
  error: '',
  userInfo: undefined,
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
    })
    .addCase(setAuthorizationStatus, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(setError, (state, action) => {
      state.error = action.payload;
    })
    .addCase(setUserInfo, (state, action) => {
      state.userInfo = action.payload;
    });
});

export {reducer};
