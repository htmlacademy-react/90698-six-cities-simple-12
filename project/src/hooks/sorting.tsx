import { Offers } from '../types/offers';
import { Sort } from '../types/sorting';

export const useSortingOffers = (offers: Offers, currenSorting: Sort) => {

  if (currenSorting.label === 'Price: low to high') {
    return offers.sort((a, b) => a.price - b.price);
  }
  else if (currenSorting.label === 'Price: high to low') {
    return offers.sort((a, b) => b.price - a.price);
  }
  else if (currenSorting.label === 'Top rated first') {
    return offers.sort((a,b) => b.rating - a.rating );
  }
  else {
    return offers;
  }
};
