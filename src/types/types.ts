export interface Segment {
  date: string;
  destination: string;
  duration: number;
  origin: string;
  stops: string[];
}

export interface TicketProps {
  carrier: string;
  price: number;
  segments: Segment[];
}

export interface Tickets {
  tickets: TicketProps[];
  stop: boolean;
}

export enum TabKeys {
  cheapest = 'cheapest',
  fastest = 'fastest',
  optimal = 'optimal',
}

export interface TicketState extends Tickets {
  filter: string;
  isLoading: boolean;
  error: string;
  visibleTickets: number;
}

export interface FiltersValue {
  isChecked: boolean;
  label: string;
  count?: number;
}

export enum Filter {
  all = 'all',
  noTransfer = 'noTransfer',
  oneTransfer = 'oneTransfer',
  twoTransfers = 'twoTransfers',
  threeTransfers = 'threeTransfers',
}

export type Filters = Record<Filter, FiltersValue>;
