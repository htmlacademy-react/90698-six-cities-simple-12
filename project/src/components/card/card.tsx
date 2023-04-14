import { useNavigate } from 'react-router';
import { Offer } from '../../types/offers';
import { Reviews } from '../../types/reviews';

type CardProps = {
  offer: Offer;
  reviews: Reviews;
  onListItemHover: (listItemName: string | undefined) => void;
};

function CardScreen({offer, reviews, onListItemHover}: CardProps): JSX.Element {

  const navigate = useNavigate();

  const navigateToRoomPage = () => {
    const path = `offer/${offer.id}`;
    navigate(path);
  };

  const onListItemEnter = () => {
    onListItemHover(offer.name);
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
      {offer.premium && (
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      )}
      <div className="cities__image-wrapper place-card__image-wrapper">
        <img className="place-card__image" src={offer.photo[0]} width="260" height="200" alt=" " />
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
        <h2 className="place-card__name" onClick={navigateToRoomPage}>
          {offer.name}
        </h2>
        <p className="place-card__type">{offer.type}</p>
      </div>
    </article>
  );
}

export default CardScreen;
