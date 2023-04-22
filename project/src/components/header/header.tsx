import Logo from '../logo/logo';
import Authorization from '../Autorization/Autorization';

function Header(): JSX.Element {
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Logo />
          </div>
          <Authorization />
        </div>
      </div>
    </header>
  );
}
export default Header;
