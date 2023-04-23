import { Route, Routes } from 'react-router-dom';
import { AppRoute } from '../../const';
import MainScreen from '../../pages/main/main';
import LoginScreen from '../../pages/login/login';
import PropertyScreen from '../../pages/room/room';
import NotFoundScreen from '../../pages/not-found-screen/not-found-screen';
import { useAppSelector } from '../../hooks/redux';
import LoadingScreen from '../../pages/loading/loading';
import HistoryRouter from '../history-router/history-router';
import browserHistory from '../../services/browser-history';
import { getOffersLoadingStatus } from '../../store/offers/selectors';

function App(): JSX.Element {
  const areOffersLoading = useAppSelector(getOffersLoadingStatus);

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
          element={<PropertyScreen />}
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
