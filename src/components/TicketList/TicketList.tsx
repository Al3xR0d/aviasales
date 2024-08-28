import './TicketList.css';
import { Ticket } from '../Ticket/Ticket';
import { Props } from '../../types/types';
import { v4 as uuid } from 'uuid';

export const TicketList = ({ tickets }: Props) => {
  return (
    <>
      <div className="tickets">
        <ul className="ticketList">
          {tickets?.map((item) => {
            return (
              <li key={uuid()}>
                <Ticket price={item.price} carrier={item.carrier} segments={item.segments} />
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};
