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

export interface Filters {
  all: FiltersValue;
  noTransfer: FiltersValue;
  oneTransfer: FiltersValue;
  twoTransfers: FiltersValue;
  threeTransfers: FiltersValue;
}

export interface Props {
  tickets: TicketProps[];
}
