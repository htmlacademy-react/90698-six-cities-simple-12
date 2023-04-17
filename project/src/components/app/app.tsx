import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { AppRoute } from '../../const';
import MainScreen from '../../pages/main/main';
import LoginScreen from '../../pages/login/login';
import PropertyScreen from '../../pages/room/room';
import NotFoundScreen from '../../pages/not_found_screen/not_found_screen';
import { Reviews } from '../../types/reviews';
import { Cities } from '../../types/cities';

type AppScreenProps = {
  cities: Cities;
  reviews: Reviews;
}

function App({reviews, cities}: AppScreenProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Main}
          element={<MainScreen reviews={reviews} cities={cities} />}
        />
        <Route
          path={AppRoute.Login}
          element={<LoginScreen />}
        />
        <Route
          path={AppRoute.Room}
          element={<PropertyScreen reviews={reviews} />}
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
