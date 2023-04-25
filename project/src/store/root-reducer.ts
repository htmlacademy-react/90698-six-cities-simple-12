import { combineReducers } from '@reduxjs/toolkit';
import { NameSpace } from '../const';
import { offersData } from './offers/offers';
import { currentCityData } from './city/city';
import { userData } from './authorization/authorization';
import { commentsData } from './comments/comments';

export const rootReducer = combineReducers({
  [NameSpace.Offers]: offersData.reducer,
  [NameSpace.City]: currentCityData.reducer,
  [NameSpace.Authorization]: userData.reducer,
  [NameSpace.Comments]: commentsData.reducer,
});
