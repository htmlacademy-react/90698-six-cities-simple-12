import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { changeCity } from '../../store/action';

type LocationProps = {
  city: string;
};

function Location({ city }: LocationProps) {
  const currentCity = useAppSelector((state) => state.currentCity);

  const dispatch = useAppDispatch();

  const onCityClick = () => {
    dispatch(changeCity(city));
  };

  return (
    <li
      className={`locations__item ${
        currentCity === city ? 'locations--current' : ''
      }`}
      onClick={onCityClick}
    >
      <div className="locations__item-link tabs__item">
        <span>{city}</span>
      </div>
    </li>
  );
}

export default Location;
