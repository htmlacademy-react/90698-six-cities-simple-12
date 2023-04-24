import React from 'react';
import { useAppDispatch } from '../../hooks/redux';
import { setSortingOptions } from '../../store/offers/offers';
import { SortingOptions } from '../../types/sorting';

function Sorting({ name, type, order }: SortingOptions) {
  const dispatch = useAppDispatch();

  const onClickSetSortOption = () => {
    dispatch(setSortingOptions({name, type, order}));
  };

  return (
    <li onClick={onClickSetSortOption} className="places__option places__option--active" tabIndex={0}>
      {name}
    </li>
  );
}

export default React.memo(Sorting);
