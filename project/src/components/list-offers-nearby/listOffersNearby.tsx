import { Offers } from '../../types/offers';
import OfferCardNearby from '../offer-card-nearby/offerCardNearby';

type ListOffersNearbyProps = {
  offers: Offers;
  onListItemHover: (listItemName: string | undefined) => void;
};

function ListOffersNearby ({ offers, onListItemHover }: ListOffersNearbyProps) {
  return (
    <div className="near-places__list places__list">
      {offers.map((offer) => (
        <OfferCardNearby
          offer={offer}
          onListItemHover={onListItemHover}
          key={offer.id}
        />
      ))}
    </div>
  );
}

export default ListOffersNearby;