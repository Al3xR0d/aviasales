import { Filter } from '../types/types';

export const filtersMap = new Map(
  Object.entries({
    [Filter.all]: { label: 'Все' },
    [Filter.noTransfer]: { label: 'Без пересадок', count: 0 },
    [Filter.oneTransfer]: { label: '1 пересадка', count: 1 },
    [Filter.twoTransfers]: { label: '2 пересадки', count: 2 },
    [Filter.threeTransfers]: { label: '3 пересадки', count: 3 },
  })
);
