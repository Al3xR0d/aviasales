import { ApiTicket } from '../Api/Api';
import { filtersSlice } from './reducers/FiltersSlice';
import { ticketSlice } from './reducers/TicketsSlice';
import { AppDispatch } from './store';
import { Filters } from '../types/types';

export const fectchTickets = () => async (dispatch: AppDispatch) => {
  try {
    dispatch(ticketSlice.actions.handleTicketsFetch());
    const response = await ApiTicket.getTicketList();
    dispatch(ticketSlice.actions.handleTicketsFetchSuccess(response));
  } catch (e) {
    dispatch(ticketSlice.actions.handleTicketsFetchError(e instanceof Error ? e.message : 'Неизвестная ошибка'));
  }
};

export const filterTickets = (filter: string) => (dispatch: AppDispatch) => {
  if (filter === 'all') {
    dispatch(filtersSlice.actions.handleSelectAll());
  } else dispatch(filtersSlice.actions.handleSelectFilter(filter as keyof Filters));
};
