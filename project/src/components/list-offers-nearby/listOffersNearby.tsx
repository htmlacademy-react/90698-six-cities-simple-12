import { Offers } from '../../types/offers';
import { Reviews } from '../../types/reviews';
import OfferCardNearby from '../offer-card-nearby/offerCardNearby';

type ListOffersNearbyProps = {
  offers: Offers;
  reviews: Reviews;
  onListItemHover: (listItemName: string | undefined) => void;
};

function ListOffersNearby ({ offers, reviews, onListItemHover }: ListOffersNearbyProps) {
  return (
    <div className="near-places__list places__list">
      {offers.map((offer) => (
        <OfferCardNearby
          offer={offer}
          reviews={reviews}
          onListItemHover={onListItemHover}
          key={offer.id}
        />
      ))}
    </div>
  );
}

export default ListOffersNearby;
