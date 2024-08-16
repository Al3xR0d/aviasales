// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css';
import { TicketList } from './components/TicketList/TicketList';
import { Header } from './components/Header/Header';
import { ApiTicket } from './components/Api/Api';
import { useEffect } from 'react';

function App() {
  // useEffect(() => {
  //   ApiTicket.getSearchId();
  // }, []);

  useEffect(() => {
    ApiTicket.getTicketList();
  }, []);

  return (
    <>
      <Header />
      <TicketList />
    </>
  );
}

export default App;
