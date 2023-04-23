import React from 'react';
import { SORTING_TYPE } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { openSorting, changeSorting } from '../../store/offers/offers';
import { Sort } from '../../types/sorting';
import { getOpenSort } from '../../store/offers/selectors';


type SortingOptionsProps ={
  currenSorting: Sort;
}

function SortingOptions({currenSorting}: SortingOptionsProps ): JSX.Element {

  const dispatch = useAppDispatch();
  const isOpenSorting = useAppSelector(getOpenSort);

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type" tabIndex={0} onClick={() => dispatch(openSorting())}>
        {currenSorting.label}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className={`places__options places__options--custom ${isOpenSorting ? 'places__options--opened' : ''}`} >
        {SORTING_TYPE.map((sorting, id) => (
          <li
            key={sorting.label}
            className={`places__option ${currenSorting === sorting ? 'places__option--active' : ''}`}
            tabIndex={0}
            onClick={() => dispatch(changeSorting(sorting))}

          >
            {sorting.label}
          </li>
        ))}
      </ul>
    </form>
  );
}

export default React.memo(SortingOptions);
