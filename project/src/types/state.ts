import {store} from '../store/index';
import { AuthorizationStatus } from '../const';
import { Offers } from './offers';
import { UserInfo } from './authorization';
import { Sort } from './sorting';

export type UserData = {
    userInfo: Omit<UserInfo, 'token'> | undefined;
    authorizationStatus: AuthorizationStatus;
  };

  export type OffersData = {
    offers: Offers;
    areOffersLoading: boolean;
    isOpenSort: boolean;
    sorting: Sort;    
    error: boolean;
  };

  export type CurrentCityData = {
    currentCity: string;
  };

export type State = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
