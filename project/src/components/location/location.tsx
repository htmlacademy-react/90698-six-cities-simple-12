import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { changeCity } from '../../store/action';
import { City } from '../../types/cities';

type LocationProps = {
  city: City;
};

function Location({ city }: LocationProps) {
  const currentCity = useAppSelector((state) => state.currentCity);

  const dispatch = useAppDispatch();

  const onCityClick = () => {
    dispatch(changeCity({ currentCity: city }));
  };

  return (
    <li
      className={`locations__item ${
        currentCity.title === city.title ? 'locations--current' : ''
      }`}
      onClick={onCityClick}
    >
      <div className="locations__item-link tabs__item">
        <span>{city.title}</span>
      </div>
    </li>
  );
}

export default Location;
