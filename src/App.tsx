import './App.css';
import { TicketList } from './components/TicketList/TicketList';
import { Header } from './components/Header/Header';
import { ApiTicket, Tickets } from './components/Api/Api';
import { useEffect, useState } from 'react';

export interface Props {
  setLoading: (item: Tickets) => void;
  loading: Tickets;
}

const App = () => {
  const [loading, setLoading] = useState<Tickets>({ tickets: [], stop: false });

  // console.log(loading);

  useEffect(() => {
    ApiTicket.getTicketList().then((item) => {
      if (item) {
        setLoading(item);
      }
    });
  }, []);

  return (
    <>
      <Header />
      <TicketList setLoading={setLoading} loading={loading} />
    </>
  );
};

export default App;
