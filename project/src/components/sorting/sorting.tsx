import React from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { setSortingOptions } from '../../store/offers/offers';
import { SortingOptions } from '../../types/sorting';
import { getSortingOptions } from '../../store/offers/selectors';

type SortingProps = {
  toggleVisiblePopup: () => void;
} & SortingOptions;

function Sorting({ name, type, order, toggleVisiblePopup }: SortingProps) {
  const dispatch = useAppDispatch();
  const sortOption = useAppSelector(getSortingOptions);

  const onClickSetSortOption = () => {
    dispatch(setSortingOptions({name, type, order}));
    toggleVisiblePopup();
  };

  return (
    <li onClick={onClickSetSortOption} className={`places__option ${sortOption.name === name ? 'places__option--active' : ''}`} tabIndex={0}>
      {name}
    </li>
  );
}

export default React.memo(Sorting);
