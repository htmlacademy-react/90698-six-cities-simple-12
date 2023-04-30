import { Route, Routes } from 'react-router-dom';
import { AppRoute } from '../../const';
import MainScreen from '../../pages/main/main';
import PropertyScreen from '../../pages/room/room';
import NotFoundScreen from '../../pages/not-found-screen/not-found-screen';
import { useAppSelector } from '../../hooks/redux';
import { getOffersLoadingStatus } from '../../store/offers/selectors';
import Loading from '../../pages/loading/loading';
import LoginScreen from '../../pages/login/login';

function App(): JSX.Element {
  const areOffersLoading = useAppSelector(getOffersLoadingStatus);

  if (areOffersLoading) {
    return <Loading />;
  }

  return (

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
  );
}

export default App;
