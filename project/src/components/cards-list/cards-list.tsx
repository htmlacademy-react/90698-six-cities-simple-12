import { Offers } from '../../types/offers';
import CardScreen from '../card/card';

type CardsListProps = {
    offers: Offers;
    onListItemHover: (selectedOfferId: number | undefined) => void;
  };

function CardsList({offers, onListItemHover}: CardsListProps) {
  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => (
        <CardScreen offer={offer} onListItemHover={onListItemHover} key={offer.id} />
      ))}
    </div>
  );
}

export default CardsList;
