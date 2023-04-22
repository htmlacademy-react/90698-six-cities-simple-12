import { Link } from 'react-router-dom';
import { useAppSelector, useAppDispatch } from '../../hooks/redux';
import { AuthorizationStatus, AppRoute } from '../../const';
import { logoutAction } from '../../store/asyncActions';


function Authorization() {
  const authorizationStatus = useAppSelector(
    (state) => state.authorizationStatus
  );

  const userInfo = useAppSelector(
    (state) => state.userInfo
  );

  const dispatch = useAppDispatch();

  const onLogout = () => {
    dispatch(logoutAction());
  };

  return (
    <nav className="header__nav">
      <ul className="header__nav-list">
        {authorizationStatus === AuthorizationStatus.Auth && userInfo ? (
          <>
            <li className="header__nav-item user">
              <div className="header__nav-profile">
                <img className="header__avatar-wrapper" src={userInfo.avatarUrl} alt={userInfo.name} />
                <span className="header__user-name user__name">
                  {userInfo.email}
                </span>
              </div>
            </li>
            <li className="header__nav-item">
              <div className="header__nav-link">
                <div className="header__signout" onClick={onLogout}>
                        Sign out
                </div>
              </div>
            </li>
          </>
        ) : (
          <li className="header__nav-item user">
            <Link
              className="header__nav-link header__nav-link--profile"
              to={AppRoute.Login}
            >
              <div className="header__avatar-wrapper user__avatar-wrapper"></div>
              <span className="header__login">Sign in</span>
            </Link>
          </li>
        )}
      </ul>
    </nav>
  );
}

export default Authorization;
