import {createAction} from '@reduxjs/toolkit';
import{ Offers } from '../types/offers';
import { Sort } from '../types/sorting';
import { AuthorizationStatus } from '../const';
import { AppRoute } from '../const';
import { UserInfo } from '../types/authorization';

export const Action = {
  CHANGE_CITY: 'CHANGE_CITY',
  LOAD_OFFERS: 'LOAD_OFFERS',
  SET_OFFERS_LOADING_STATUS: 'SET_OFFERS_LOADING_STATUS',
  SET_AUTHORIZATION_STATUS: 'SET_AUTHORIZATION_STATUS',
  SET_ERROR: 'SET_ERROR',
  REDIRECT_TO_ROUTE: 'REDIRECT_TO_ROUTE',
  SET_USER_INFO: 'SET_USER_INFO',
};

export const changeCity = createAction<string>(Action.CHANGE_CITY);

export const loadOffers = createAction<Offers>(Action.LOAD_OFFERS);

export const setOffersLoadingStatus = createAction<boolean>(Action.SET_OFFERS_LOADING_STATUS);

export const openSorting = createAction('offers/openSorting');
export const changeSorting = createAction('offers/changeSorting', (sorting: Sort) => ({
  payload:sorting
}));

export const setAuthorizationStatus = createAction<AuthorizationStatus>(Action.SET_AUTHORIZATION_STATUS);
export const setError = createAction<string | null>(Action.SET_ERROR);
export const redirectToRoute = createAction<AppRoute>(Action.REDIRECT_TO_ROUTE);
export const setUserInfo = createAction<Omit<UserInfo, 'token'> | undefined>(Action.SET_USER_INFO);
