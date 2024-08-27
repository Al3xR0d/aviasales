import { RootState } from './store';
import { createSelector } from 'reselect';

export const selectTickets = (state: RootState) => state.ticketReducer.tickets;
export const selectFilter = (state: RootState) => state.filterReducer;
export const selectSortType = (state: RootState) => state.ticketReducer.filter;

export const selectFilteredTickets = createSelector(
  [selectTickets, selectFilter, selectSortType],
  (tickets, filters, sortType) => {
    const filtered = tickets.filter((ticket) => {
      return ticket.segments.every((segment) => {
        const stops = segment.stops.length;
        return Object.entries(filters).some(([, filter]) => filter.isChecked && stops === filter.count);
      });
    });
    if (sortType === 'fastest')
      return filtered.sort(
        (a, b) =>
          a.segments.reduce((acc, item) => (acc += item.duration), 0) -
          b.segments.reduce((acc, item) => (acc += item.duration), 0)
      );
    if (sortType === 'optimal') {
      return filtered.sort((a, b) => {
        const totalStopsA = a.segments.reduce((sum, segment) => sum + segment.stops.length, 0);
        const totalStopsB = b.segments.reduce((sum, segment) => sum + segment.stops.length, 0);

        if (totalStopsA !== totalStopsB) {
          return totalStopsA - totalStopsB;
        }

        return a.price - b.price;
      });
    }
    return filtered.sort((a, b) => a.price - b.price);
  }
);
