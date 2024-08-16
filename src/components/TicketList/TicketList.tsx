import './TicketList.css';
import { Ticket } from '../Ticket/Ticket';
import { Filter } from '../Filter/Filter';

export const TicketList = () => {
  return (
    <>
      <div className="tickets">
        <div className="filter">
          <Filter />
        </div>
        <Ticket />
      </div>
    </>
  );
};
