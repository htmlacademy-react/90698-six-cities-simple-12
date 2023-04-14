import { Reviews } from '../../types/reviews';
import Review from '../reviews/reviews';

type ReviewsListProps = {
  reviews: Reviews;
};

function ReviewsList({reviews}: ReviewsListProps) {
  return (
    <ul className="reviews__list">
      {reviews.map((review) => (
        <Review {...review} key={review.name} />
      ))}
    </ul>
  );
}

export default ReviewsList;
