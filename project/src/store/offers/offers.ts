import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';
import { OffersData } from '../../types/state';
import { fetchNearbyOffersAction, fetchOffersAction, fetchSingleOfferAction } from '../asyncActions';
import { SORTING_TYPE } from '../../const';
import { Sort } from '../../types/sorting';

const initialState: OffersData = {
  offers: [],
  isOpenSort: false,
  sorting: SORTING_TYPE[0],
  error: false,
  areOffersLoading: false,
  singleOffer: undefined,
  isSingleOfferLoading: false,
  notFoundSingleOfferError: false,
  nearbyOffers: [],
  areNearbyOffersLoading: false,
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
      })
      .addCase(fetchSingleOfferAction.pending, (state) => {
        state.isSingleOfferLoading = true;
        state.notFoundSingleOfferError = false;
      })
      .addCase(fetchSingleOfferAction.fulfilled, (state, action) => {
        state.isSingleOfferLoading = false;
        state.singleOffer = action.payload;
      })
      .addCase(fetchSingleOfferAction.rejected, (state) => {
        state.isSingleOfferLoading = false;
        state.notFoundSingleOfferError = true;
      })
      .addCase(fetchNearbyOffersAction.pending, (state) => {
        state.areNearbyOffersLoading = true;
        state.error = false;
      })
      .addCase(fetchNearbyOffersAction.fulfilled, (state, action) => {
        state.areNearbyOffersLoading = false;
        state.nearbyOffers = action.payload;
      })
      .addCase(fetchNearbyOffersAction.rejected, (state) => {
        state.areNearbyOffersLoading = false;
        state.error = true;
      });
  },
});

export const { clearError, changeSorting, openSorting } = offersData.actions;
