import { createSlice, PayloadAction, current } from '@reduxjs/toolkit';
import { Filters, Filter } from '../../types/types';

const initialState: Filters = {
  [Filter.all]: true,
  [Filter.noTransfer]: true,
  [Filter.oneTransfer]: true,
  [Filter.twoTransfers]: true,
  [Filter.threeTransfers]: true,
};

const isAllChecked = (state: Filters) => {
  const { all, ...transfers } = current(state);
  return Object.values(transfers).every((item) => item);
};

export const filtersSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    handleSelectFilter(state: Filters, action: PayloadAction<keyof Filters>) {
      state[action.payload] = !state[action.payload];
      const allSelected = isAllChecked(state);
      if (allSelected) state.all = true;
      if (!allSelected) state.all = false;
    },
    handleSelectAll(state: Filters) {
      state.all = !state.all;
      state.noTransfer = state.all;
      state.oneTransfer = state.all;
      state.twoTransfers = state.all;
      state.threeTransfers = state.all;
    },
  },
});

export default filtersSlice.reducer;
