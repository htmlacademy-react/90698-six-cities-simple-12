import { Offers } from '../../types/offers';
import { Reviews } from '../../types/reviews';
import CardScreen from '../card/card';

type CardsListProps = {
    offers: Offers;
    reviews: Reviews;
    onListItemHover: (listItemName: string | undefined) => void;
  };

function CardsList({offers, reviews, onListItemHover}: CardsListProps) {
  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => (
        <CardScreen offer={offer} reviews={reviews} onListItemHover={onListItemHover} key={offer.id} />
      ))}
    </div>
  );
}

export default CardsList;
