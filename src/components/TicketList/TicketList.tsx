import './TicketList.css';
import { Ticket } from '../Ticket/Ticket';
import { Filter } from '../Filter/Filter';
import { Props } from '../../App';

export const TicketList = ({ loading }: Props) => {
  // console.log(loading);

  return (
    <>
      <div className="tickets">
        <div className="filter">
          <Filter />
        </div>
        {loading.tickets?.map((item, index) => (
          <Ticket key={index} price={item.price} carrier={item.carrier} segments={item.segments} />
        ))}
      </div>
    </>
  );
};
