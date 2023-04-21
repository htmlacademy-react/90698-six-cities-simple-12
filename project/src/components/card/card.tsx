import { Link } from 'react-router-dom';
import { Offer } from '../../types/offers';

type CardProps = {
  offer: Offer;
  onListItemHover: (selectedOfferId: number | undefined) => void;
};

function CardScreen({offer, onListItemHover}: CardProps): JSX.Element {

  const onListItemEnter = () => {
    onListItemHover(offer.id);
  };

  const onListItemLeave = () => {
    onListItemHover(undefined);
  };

  return (
    <article
      className="cities__card place-card"
      onMouseEnter={onListItemEnter}
      onMouseLeave={onListItemLeave}
    >
      {offer.isPremium && (
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      )}
      <div className="cities__image-wrapper place-card__image-wrapper">
        <img className="place-card__image" src={offer.images[0]} width="260" height="200" alt={offer.title} />
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{offer.price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>

        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: '80%'}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <Link className="place-card__name" to={`offer/${offer.id}`}>
          {offer.title}
        </Link>
        <p className="place-card__type">{offer.type}</p>
      </div>
    </article>
  );
}

export default CardScreen;
