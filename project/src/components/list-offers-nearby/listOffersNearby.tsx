import { Offers } from '../../types/offers';
import OfferCardNearby from '../offer-card-nearby/offerCardNearby';

type ListOffersNearbyProps = {
  nearbyOffers: Offers;
  onListItemHover: (listItemName: string | undefined) => void;
};

function ListOffersNearby ({ nearbyOffers, onListItemHover }: ListOffersNearbyProps) {
  return (
    <div className="near-places__list places__list">
      {nearbyOffers.map((nearbyOffer) => (
        <OfferCardNearby
          nearbyOffer={nearbyOffer}
          onListItemHover={onListItemHover}
          key={nearbyOffer.id}
        />
      ))}
    </div>
  );
}

export default ListOffersNearby;
