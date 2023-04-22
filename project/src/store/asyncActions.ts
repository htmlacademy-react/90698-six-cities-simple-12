import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, State } from '../types/state';
import { AxiosInstance, AxiosResponse } from 'axios';
import { Offers } from '../types/offers';
import { loadOffers, setOffersLoadingStatus, setAuthorizationStatus, redirectToRoute, setUserInfo } from './action';
import { APIRoute, AuthorizationStatus, AppRoute } from '../const';
import { saveToken, dropToken } from '../services/token';
import { AuthInfo, UserInfo } from '../types/authorization';

export const fetchOffersAction = createAsyncThunk<
  void,
  undefined,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('LOAD_OFFERS', async (_arg, { dispatch, extra: api }) => {
  dispatch(setOffersLoadingStatus(true));
  const { data } = await api.get<Offers>(APIRoute.Offers);
  dispatch(setOffersLoadingStatus(false));
  dispatch(loadOffers(data));
});

export const checkAuthAction = createAsyncThunk<
  void,
  undefined,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('CHECK_AUTHORIZATION', async (_arg, { dispatch, extra: api }) => {
  try {
    const { data }: AxiosResponse<UserInfo> = await api.get(APIRoute.Login);
    dispatch(setAuthorizationStatus(AuthorizationStatus.Auth));
    dispatch(
      setUserInfo({
        email: data.email,
        avatarUrl: data.avatarUrl,
        id: data.id,
        isPro: data.isPro,
        name: data.name,
      })
    );
  } catch {
    dispatch(setAuthorizationStatus(AuthorizationStatus.NoAuth));
  }
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
  dispatch(setAuthorizationStatus(AuthorizationStatus.Auth));
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
  dispatch(setAuthorizationStatus(AuthorizationStatus.NoAuth));
  dispatch(setUserInfo(undefined));
  dispatch(redirectToRoute(AppRoute.Login));
});
