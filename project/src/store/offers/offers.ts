import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';
import { OffersData } from '../../types/state';
import { fetchNearbyOffersAction, fetchOffersAction, fetchSingleOfferAction } from '../asyncActions';
import { SortingOptions } from '../../types/sorting';

export const initialState: OffersData = {
  offers: [],
  sortingOptions: {
    name: 'popular',
    type: 'rating',
    order: 'asc',
  },
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
    setSortingOptions: (state, action: PayloadAction<SortingOptions>) => {
      const data = action.payload;
      state.sortingOptions = data;
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

export const { clearError, setSortingOptions } = offersData.actions;
