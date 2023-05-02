import {store} from '../store/index';
import { AuthorizationStatus } from '../const';
import { Offers, Offer } from './offers';
import { UserInfo } from './authorization';
import { Comments } from './comments';
import { SortingOptions } from './sorting';

export type OffersData = {
  offers: Offers;
  singleOffer: Offer | undefined;
  notFoundSingleOfferError: boolean;
  isSingleOfferLoading: boolean;
  nearbyOffers: Offers;
  areNearbyOffersLoading: boolean;
  areOffersLoading: boolean;
  sortingOptions: SortingOptions;
  error: boolean;
};
export type CommentsData = {
  comments: Comments;
  areCommentsLoading: boolean;
  isCommentBeingPosted: boolean;
}

export type CurrentCityData = {
  currentCity: string;
};
export type UserData = {
  userInfo: Omit<UserInfo, 'token'> | undefined;
  authorizationStatus: AuthorizationStatus;
};
export type State = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
