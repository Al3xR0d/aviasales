import { FC } from 'react';
import styles from './TicketList.module.css';
import { Ticket } from '../Ticket/Ticket';
import { TicketProps } from '../../types/types';

interface Props {
  tickets: TicketProps[];
}

export const TicketList: FC<Props> = ({ tickets }) => {
  return (
    <>
      <div className={styles.tickets}>
        <ul className={styles.ticketList}>
          {tickets?.map((item, index) => {
            return (
              <li key={index}>
                <Ticket price={item.price} carrier={item.carrier} segments={item.segments} />
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};
