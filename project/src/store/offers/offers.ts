import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';
import { OffersData } from '../../types/state';
import { fetchOffersAction } from '../asyncActions';
import { SORTING_TYPE } from '../../const';
import { Sort } from '../../types/sorting';

const initialState: OffersData = {
  offers: [],
  areOffersLoading: false,
  isOpenSort: false,
  sorting: SORTING_TYPE[0],
  error: false,
};

export const offersData = createSlice({
  name: NameSpace.Offers,
  initialState,
  reducers: {
    clearError: (state) => {
      state.error = false;
    },
    changeSorting: (state, action: PayloadAction<Sort>) => {
      state.sorting = action.payload;
      state.isOpenSort = !state.isOpenSort;
    },
    openSorting: (state) => {
      state.isOpenSort = !state.isOpenSort;
    }
  },
  extraReducers(builder) {
    builder
      .addCase(fetchOffersAction.pending, (state) => {
        state.areOffersLoading = true;
        state.error = false;
      })
      .addCase(fetchOffersAction.fulfilled, (state, action) => {
        state.areOffersLoading = false;
        state.offers = action.payload;
      })
      .addCase(fetchOffersAction.rejected, (state) => {
        state.areOffersLoading = false;
        state.error = true;
      });
  },
});

export const { clearError, changeSorting, openSorting } = offersData.actions;
