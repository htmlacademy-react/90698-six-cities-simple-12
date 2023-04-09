import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { AppRoute } from '../../const';
import MainScreen from '../../pages/main/main';
import LoginScreen from '../../pages/login/login';
import PropertyScreen from '../../pages/property/property';
import NotFoundScreen from '../../pages/not_found_screen/not_found_screen';
import { Offers } from '../../types/offers';
import { Reviews } from '../../types/reviews';

type AppScreenProps = {
  offersCount: number;
  offers: Offers;
  reviews: Reviews;
}

function App({offersCount, offers, reviews}: AppScreenProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Main}
          element={<MainScreen offersCount={offersCount} offers={offers} reviews={reviews} />}
        />
        <Route
          path={AppRoute.Login}
          element={<LoginScreen />}
        />
        <Route
          path={AppRoute.Room}
          element={<PropertyScreen offers={offers} reviews={reviews} />}
        />
        <Route
          path="*"
          element={<NotFoundScreen />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
