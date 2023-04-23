import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { setCurrentCity } from '../../store/city/city';
import { getCurrentCity } from '../../store/city/selectors';

type LocationProps = {
  city: string;
};

function Location({ city }: LocationProps) {
  const currentCity: string = useAppSelector(getCurrentCity);

  const dispatch = useAppDispatch();

  const onCityClick = () => {
    dispatch(setCurrentCity({currentCity: city}));
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
