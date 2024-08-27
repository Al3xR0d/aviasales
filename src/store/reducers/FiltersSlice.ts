import { createSlice, PayloadAction, current } from '@reduxjs/toolkit';

interface FiltersValue {
  isChecked: boolean;
  label: string;
  count?: number;
}

export interface Filters {
  all: FiltersValue;
  noTransfer: FiltersValue;
  oneTransfer: FiltersValue;
  twoTransfers: FiltersValue;
  threeTransfers: FiltersValue;
}

const initialState: Filters = {
  all: { isChecked: true, label: 'Все' },
  noTransfer: { isChecked: true, label: 'Без пересадок', count: 0 },
  oneTransfer: { isChecked: true, label: '1 пересадка', count: 1 },
  twoTransfers: { isChecked: true, label: '2 пересадки', count: 2 },
  threeTransfers: { isChecked: true, label: '3 пересадки', count: 3 },
};

const isAllChecked = (state: Filters) => {
  const arr = Object.entries(current(state)).map((value) => {
    return value[1];
  });
  return arr.filter((el: FiltersValue) => el.label !== 'Все').every((el: FiltersValue) => el.isChecked);
};

export const filtersSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    selectFilter(state: Filters, action: PayloadAction<keyof Filters>) {
      state[action.payload].isChecked = !state[action.payload].isChecked;
      const allSelected = isAllChecked(state);
      if (allSelected) state.all.isChecked = true;
      if (!allSelected) state.all.isChecked = false;
    },
    all(state: Filters) {
      state.all.isChecked = !state.all.isChecked;
      state.noTransfer.isChecked = state.all.isChecked;
      state.oneTransfer.isChecked = state.all.isChecked;
      state.twoTransfers.isChecked = state.all.isChecked;
      state.threeTransfers.isChecked = state.all.isChecked;
    },
  },
});

export default filtersSlice.reducer;
