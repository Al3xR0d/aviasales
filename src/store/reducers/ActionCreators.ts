import { AppDispatch } from '../store';
import { ApiTicket } from '../../components/Api/Api';
import { ticketSlice } from './TicketsSlice';
import { filtersSlice } from './FiltersSlice';
import { Filters } from '../../types/types';

export const fectchTickets = () => async (dispatch: AppDispatch) => {
  try {
    dispatch(ticketSlice.actions.ticketsFetching());
    const response = await ApiTicket.getTicketList();
    dispatch(ticketSlice.actions.ticketsFetchingSuccess(response));
  } catch (e) {
    dispatch(ticketSlice.actions.ticketsFetchingError(e instanceof Error ? e.message : 'Неизвестная ошибка'));
  }
};

export const filterTickets = (filter: string) => (dispatch: AppDispatch) => {
  if (filter === 'all') {
    dispatch(filtersSlice.actions.all());
  } else dispatch(filtersSlice.actions.selectFilter(filter as keyof Filters));
};
