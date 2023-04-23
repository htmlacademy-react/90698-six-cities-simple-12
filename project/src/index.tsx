import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './components/app/app';
import { reviews } from './mocks/reviews';
import { store } from './store';
import {fetchOffersAction, checkAuthAction} from './store/asyncActions';
import Error from './components/error/error';

store.dispatch(fetchOffersAction());
store.dispatch(checkAuthAction());

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <Provider store = {store}>
      <Error />
      <App reviews={reviews} />
    </Provider>
  </React.StrictMode>,
);
