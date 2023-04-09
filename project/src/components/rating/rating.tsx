import { ChangeEvent } from 'react';

type RatingProps = {
  value: number;
  onChange: (evt: ChangeEvent<HTMLInputElement>) => void;
};

function Rating({value, onChange}: RatingProps) {
  return (
    <>
      <input
        className="form__rating-input visually-hidden"
        name="rating"
        id={`${value}-stars`}
        type="radio"
        value={value}
        onChange={onChange}
      />
      <label
        htmlFor={`${value}-stars`}
        className="reviews__rating-label form__rating-label"
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
