import axios from 'axios';

export class Api {
  url: string;

  constructor() {
    this.url = 'https://aviasales-test-api.kata.academy/';
  }

  getSearchId = async () => {
    try {
      const response = await axios.get(this.url + 'search');
      // console.log(response.data.searchId);
      return response.data.searchId;
    } catch (err) {
      console.error(err);
    }
  };

  getTicketList = async () => {
    try {
      // const searchId = await this.getSearchId();
      const response = await axios.get(this.url + 'tickets?searchId=' + (await this.getSearchId()));
      console.log(response.data);
      return response.data;
    } catch (err) {
      console.error(err);
    }
  };
}

export const ApiTicket = new Api();
