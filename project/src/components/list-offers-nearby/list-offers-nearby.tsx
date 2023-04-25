import { Offers } from '../../types/offers';
import OfferCardNearby from '../offer-card-nearby/offer-card-nearby';

type ListOffersNearbyProps = {
  nearbyOffers: Offers;
  };

function ListOffersNearby ({ nearbyOffers }: ListOffersNearbyProps) {
  return (
    <div className="near-places__list places__list">
      {nearbyOffers.map((nearbyOffer) => (
        <OfferCardNearby
          nearbyOffer={nearbyOffer}
          key={nearbyOffer.id}
        />
      ))}
    </div>
  );
}

export default ListOffersNearby;
