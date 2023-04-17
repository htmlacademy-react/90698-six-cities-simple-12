import { Cities } from '../../types/cities';
import Location from '../location/location';

type CitiesProps = {
  cities: Cities;
};

function CitiesList ({ cities }: CitiesProps) {
  return (
    <ul className="locations__list tabs__list">
      {cities.map((city) => (
        <Location city={city} key={city.title} />
      ))}
    </ul>
  );
}

export default CitiesList;
