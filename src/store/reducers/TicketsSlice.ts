import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TicketState, Tickets } from '../../types/types';

const initialState: TicketState = {
  filter: 'chepeast',
  tickets: [],
  stop: true,
  isLoading: false,
  error: '',
  visibleTickets: 5,
};

export const ticketSlice = createSlice({
  name: 'ticket',
  initialState,
  reducers: {
    handleTicketsFetch(state) {
      state.isLoading = true;
    },
    handleTicketsFetchSuccess(state: TicketState, action: PayloadAction<Tickets>) {
      state.isLoading = false;
      state.error = '';
      state.tickets = action.payload.tickets;
      state.stop = action.payload.stop;
    },
    handleTicketsFetchError(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.error = action.payload;
    },
    getNewFiveTickets(state) {
      state.visibleTickets += 5;
    },
    getSortType(state, action: PayloadAction<string>) {
      state.filter = action.payload;
    },
  },
});

export const { getNewFiveTickets, getSortType } = ticketSlice.actions;

export default ticketSlice.reducer;
