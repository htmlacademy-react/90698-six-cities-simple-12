import { NameSpace } from '../../const';
import {State} from '../../types/state';
import {Offer, Offers} from '../../types/offers';
import { SortingOptions } from '../../types/sorting';

export const getOffers = (state: State): Offers => state[NameSpace.Offers].offers;
export const getOffersLoadingStatus = (state: State): boolean => state[NameSpace.Offers].areOffersLoading;
export const getErrorStatus = (state: State): boolean => state[NameSpace.Offers].error;
export const getSortingOptions = (state: State): SortingOptions => state[NameSpace.Offers].sortingOptions;
export const getSingleOfferErrorStatus = (state: State): boolean => state[NameSpace.Offers].notFoundSingleOfferError;
export const getSingleOfferLoadingStatus = (state: State): boolean => state[NameSpace.Offers].isSingleOfferLoading;
export const getSingleOffer = (state: State): Offer | undefined => state[NameSpace.Offers].singleOffer;
export const getNearbyOffers = (state: State): Offers => state[NameSpace.Offers].nearbyOffers;
export const getNearbyOffersLoadingStatus = (state: State): boolean => state[NameSpace.Offers].areNearbyOffersLoading;
