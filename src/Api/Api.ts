import axios from 'axios';
import { Tickets } from '../types/types';

export class Api {
  url: string;

  constructor() {
    this.url = 'https://aviasales-test-api.kata.academy/';
  }

  getSearchId = async (): Promise<string> => {
    try {
      const response = await axios.get(this.url + 'search');
      return response.data.searchId;
    } catch (err) {
      console.error('Ошибка загрузки searchId:', err);
      throw new Error('Ошибка загрузки searchId');
    }
  };

  getTicketList = async (): Promise<Tickets> => {
    try {
      const searchId = await this.getSearchId();
      const response = await axios.get(this.url + 'tickets?searchId=' + searchId);
      return {
        tickets: response.data.tickets,
        stop: response.data.stop,
      };
    } catch (err) {
      console.error('Ошибка загрузки ticket list:', err);
      throw new Error('Ошибка загрузки ticket list');
    }
  };
}

export const ApiTicket = new Api();
