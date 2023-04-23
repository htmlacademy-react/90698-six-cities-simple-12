import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, State } from '../types/state';
import { AxiosInstance, AxiosResponse } from 'axios';
import { Offers } from '../types/offers';
import { redirectToRoute } from './action';
import { APIRoute, AppRoute } from '../const';
import { saveToken, dropToken } from '../services/token';
import { AuthInfo, UserInfo } from '../types/authorization';

export const fetchOffersAction = createAsyncThunk<
  Offers,
  undefined,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('LOAD_OFFERS', async (_arg, { dispatch, extra: api }) => {
  const { data } = await api.get<Offers>(APIRoute.Offers);
  return data;
});

export const checkAuthAction = createAsyncThunk<
  UserInfo,
  undefined,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('CHECK_AUTHORIZATION', async (_arg, { dispatch, extra: api }) => {
  const { data }: AxiosResponse<UserInfo> = await api.get(APIRoute.Login);
  return data;
});

export const loginAction = createAsyncThunk<
  void,
  AuthInfo,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('LOGIN', async ({ email, password }, { dispatch, extra: api }) => {
  const { data } = await api.post<UserInfo>(APIRoute.Login, { email, password });
  saveToken(data.token);
  dispatch(checkAuthAction());
  dispatch(redirectToRoute(AppRoute.Main));
});

export const logoutAction = createAsyncThunk<
  void,
  undefined,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('LOGOUT', async (_arg, { dispatch, extra: api }) => {
  await api.delete(APIRoute.Logout);
  dropToken();
  dispatch(redirectToRoute(AppRoute.Login));
});
