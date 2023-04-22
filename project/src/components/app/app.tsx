import { Route, Routes } from 'react-router-dom';
import { AppRoute } from '../../const';
import MainScreen from '../../pages/main/main';
import LoginScreen from '../../pages/login/login';
import PropertyScreen from '../../pages/room/room';
import NotFoundScreen from '../../pages/not-found-screen/notFoundScreen';
import { Reviews } from '../../types/reviews';
import { useAppSelector } from '../../hooks/redux';
import LoadingScreen from '../../pages/loading/loading';
import HistoryRouter from '../history-router/historyRouter';
import browserHistory from '../../services/browser-history';

type AppScreenProps = {
  reviews: Reviews;
}

function App({reviews}: AppScreenProps): JSX.Element {
  const areOffersLoading = useAppSelector((state) => state.areOffersLoading);

  if (areOffersLoading) {
    return <LoadingScreen />;
  }

  return (
    <HistoryRouter history={browserHistory}>
      <Routes>
        <Route
          path={AppRoute.Main}
          element={<MainScreen />}
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
    </HistoryRouter>
  );
}

export default App;
