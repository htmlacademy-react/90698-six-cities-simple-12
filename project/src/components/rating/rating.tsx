import { ChangeEvent } from 'react';

type RatingProps = {
  value: number;
  onChange: (evt: ChangeEvent<HTMLInputElement>) => void;
  rating: number;
  postLoadingStatus: boolean;
};

function Rating({value, onChange, rating, postLoadingStatus}: RatingProps) {
  return (
    <>
      <input
        className='form__rating-input visually-hidden'
        name="rating"
        id={`${value}-stars`}
        type="radio"
        value={value}
        onChange={onChange}
        checked={value === Number(rating)}
      />
      <label
        htmlFor={`${value}-stars`}
        className={`reviews__rating-label form__rating-label ${postLoadingStatus ? 'form__rating-input_disabled' : ''}`}
        title="perfect"
      >
        <svg className="form__star-image" width="37" height="33">
          <use xlinkHref="#icon-star"></use>
        </svg>
      </label>
    </>
  );
}

export default Rating;
