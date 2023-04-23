import { PayloadAction } from '@reduxjs/toolkit';
import browserHistory from '../../services/browser-history';
import { Middleware } from 'redux';
import { rootReducer } from '../root-reducer';
import { Action } from '../action';

type Reducer = ReturnType<typeof rootReducer>;

export const redirect: Middleware<unknown, Reducer> =
  (_store) => (next) => (action: PayloadAction<string>) => {
    if (action.type === Action.REDIRECT_TO_ROUTE) {
      browserHistory.push(action.payload);
    }

    return next(action);
  };
