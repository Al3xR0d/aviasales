import './App.css';
import { Header } from './components/Header/Header';
import { Content } from './components/Content/Content';
import { TicketProps } from './types/types';

export interface Props {
  tickets: TicketProps[];
}

const App = () => {
  return (
    <div className="app">
      <Header />
      <Content />
    </div>
  );
};

export default App;
