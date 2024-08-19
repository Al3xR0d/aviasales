import axios from 'axios';

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

export class Api {
  url: string;

  constructor() {
    this.url = 'https://aviasales-test-api.kata.academy/';
  }

  getSearchId = async (): Promise<string | undefined> => {
    try {
      const response = await axios.get(this.url + 'search');
      // console.log(response.data.searchId);
      return response.data.searchId;
    } catch (err) {
      console.error(err);
    }
  };

  getTicketList = async (): Promise<Tickets | undefined> => {
    try {
      // const searchId = await this.getSearchId();
      const response = await axios.get(this.url + 'tickets?searchId=' + (await this.getSearchId()));
      // console.log(response.data);
      return {
        tickets: response.data.tickets,
        stop: response.data.stop,
      };
    } catch (err) {
      console.error(err);
    }
  };
}

export const ApiTicket = new Api();
