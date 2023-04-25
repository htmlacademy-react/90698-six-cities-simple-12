import Location from '../location/location';
import React from 'react';

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

export default React.memo(CitiesList);
