import { createSlice, PayloadAction, current } from '@reduxjs/toolkit';
import { Filters, FiltersValue, Filter } from '../../types/types';

const initialState: Filters = {
  [Filter.all]: { isChecked: true, label: 'Все' },
  [Filter.noTransfer]: { isChecked: true, label: 'Без пересадок', count: 0 },
  [Filter.oneTransfer]: { isChecked: true, label: '1 пересадка', count: 1 },
  [Filter.twoTransfers]: { isChecked: true, label: '2 пересадки', count: 2 },
  [Filter.threeTransfers]: { isChecked: true, label: '3 пересадки', count: 3 },
};

const isAllChecked = (state: Filters) => {
  return Object.entries(current(state))
    .filter((el) => el[0] !== Filter.all)
    .map((value) => {
      return value[1];
    })
    .every((el: FiltersValue) => el.isChecked);
};

export const filtersSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    handleSelectFilter(state: Filters, action: PayloadAction<keyof Filters>) {
      state[action.payload].isChecked = !state[action.payload].isChecked;
      const allSelected = isAllChecked(state);
      if (allSelected) state.all.isChecked = true;
      if (!allSelected) state.all.isChecked = false;
    },
    handleSelectAll(state: Filters) {
      state.all.isChecked = !state.all.isChecked;
      state.noTransfer.isChecked = state.all.isChecked;
      state.oneTransfer.isChecked = state.all.isChecked;
      state.twoTransfers.isChecked = state.all.isChecked;
      state.threeTransfers.isChecked = state.all.isChecked;
    },
  },
});

export default filtersSlice.reducer;
