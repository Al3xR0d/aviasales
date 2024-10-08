import styles from './Ticket.module.css';
import S7 from '../../images/S7Logo.png';
import { TicketProps } from '../../types/types';

export const Ticket: React.FC<TicketProps> = ({ price, segments }) => {
  const getDepartureTime = (date: string) => {
    return new Date(date).toLocaleTimeString([], {
      timeZone: 'utc',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  const getHours = (hours: number) => {
    return Math.floor(hours / 60);
  };

  const getMinutes = (minutes: number) => {
    return minutes % 60;
  };

  const getNewTime = (date: string, hours: number, minutes: number) => {
    let dateObj = new Date(date);
    dateObj.setHours(dateObj.getHours() + hours);
    dateObj.setMinutes(dateObj.getMinutes() + minutes);

    return dateObj.toLocaleTimeString([], {
      timeZone: 'UTC',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  const getStops = (stops: string[]) => {
    if (stops.length === 3) {
      return '3 пересадки';
    } else if (stops.length === 2) {
      return '2 пересадки';
    } else if (stops.length === 1) {
      return '1 пересадка';
    } else return 'Без пересадок';
  };

  const getSpace = (number: string) => {
    return number
      .replace(new RegExp('^(\\d{' + (number.length % 3 ? number.length % 3 : 0) + '})(\\d{3})', 'g'), '$1 $2')
      .replace(/(\d{3})+?/gi, '$1 ')
      .trim();
  };

  return (
    <>
      <div className={styles.ticket}>
        <div className={styles.ticketHeader}>
          <span className={styles.price}>{getSpace(price.toString())} Р</span>
          <img className={styles.airline} src={S7} />
        </div>
        <div className={styles.ticketFooter}>
          <div className={`${styles.flightInfo} ${styles.info}`}>
            <div className={`${styles.departure} ${styles.departure1}`}>
              <span className={`${styles.route} ${styles.flightInfo}`}>
                {segments[0].origin} – {segments[0].destination}
              </span>
              <span className={styles.departureTime}>
                {getDepartureTime(segments[0].date)} –{' '}
                {getNewTime(segments[0].date, getHours(segments[0].duration), getMinutes(segments[0].duration))}
              </span>
            </div>
            <div className={`${styles.departure} ${styles.departure2}`}>
              <span className={`${styles.route} ${styles.flightInfo}`}>
                {segments[1].origin} – {segments[1].destination}
              </span>
              <span className={styles.departureTime}>
                {getDepartureTime(segments[1].date)} –{' '}
                {getNewTime(segments[1].date, getHours(segments[1].duration), getMinutes(segments[1].duration))}
              </span>
            </div>
          </div>
          <div className={`${styles.flightTime} ${styles.info}`}>
            <div className={`${styles.departure} ${styles.departure1}`}>
              <span className={`${styles.OnTheWay} ${styles.flightInfo}`}>В пути</span>
              <span className={styles.flightTime}>
                {getHours(segments[0].duration)}ч {getMinutes(segments[0].duration)}м
              </span>
            </div>
            <div className={`${styles.departure} ${styles.departure2}`}>
              <span className={`${styles.OnTheWay} ${styles.flightInfo}`}>В пути</span>
              <span className={styles.flightTime}>
                {getHours(segments[1].duration)}ч {getMinutes(segments[1].duration)}м
              </span>
            </div>
          </div>
          <div className={`${styles.transfers} ${styles.info}`}>
            <div className={`${styles.departure} ${styles.departure1}`}>
              <span className={`${styles.numberOfTransfers} ${styles.flightInfo}`}>{getStops(segments[0].stops)}</span>
              <span className={`${styles.airports} ${segments[0].stops.length === 0 ? styles.airportsNone : ''}`}>
                {segments[0].stops.length === 0 ? 'none' : segments[0].stops.join(', ')}
              </span>
            </div>
            <div className={`${styles.departure} ${styles.departure2}`}>
              <span className={`${styles.numberOfTransfers} ${styles.flightInfo}`}>{getStops(segments[1].stops)}</span>
              <span className={`${styles.airports} ${segments[1].stops.length === 0 ? styles.airportsNone : ''}`}>
                {segments[1].stops.length === 0 ? 'none' : segments[1].stops.join(', ')}
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
