import Location from '../location/location';

type CitiesProps = {
  cities: string[];
};

function CitiesList ({ cities }: CitiesProps) {
  return (
    <ul className="locations__list tabs__list">
      {cities.map((city) => (
        <Location city={city} key={city} />
      ))}
    </ul>
  );
}

export default CitiesList;
