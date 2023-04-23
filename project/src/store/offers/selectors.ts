import { NameSpace } from '../../const';
import {State} from '../../types/state';
import {Offers} from '../../types/offers';
import { Sort } from '../../types/sorting';

export const getOffers = (state: State): Offers => state[NameSpace.Offers].offers;
export const getOffersLoadingStatus = (state: State): boolean => state[NameSpace.Offers].areOffersLoading;
export const getErrorStatus = (state: State): boolean => state[NameSpace.Offers].error;
export const getSortOptions = (state: State): Sort => state[NameSpace.Offers].sorting;
export const getOpenSort = (state: State): boolean => state[NameSpace.Offers].isOpenSort;
