// import { memo } from 'react';
import './Ticket.css';
import S7 from '../../images/S7 Logo.png';
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

  return (
    <>
      <div className="ticket">
        <div className="ticketHeader">
          <span className="price">{price} Р</span>
          <img className="airline" src={S7} />
        </div>
        <div className="ticketFooter">
          <div className="flightInfo info">
            <div className="departure departure1">
              <span className="route flightInfo">
                {segments[0].origin} – {segments[0].destination}
              </span>
              <span className="departureTime">
                {getDepartureTime(segments[0].date)} –{' '}
                {getNewTime(segments[0].date, getHours(segments[0].duration), getMinutes(segments[0].duration))}
              </span>
            </div>
            <div className="departure departure2">
              <span className="route flightInfo">
                {segments[1].origin} – {segments[1].destination}
              </span>
              <span className="departureTime">
                {getDepartureTime(segments[1].date)} –{' '}
                {getNewTime(segments[1].date, getHours(segments[1].duration), getMinutes(segments[1].duration))}
              </span>
            </div>
          </div>
          <div className="flightTime info">
            <div className="departure departure1">
              <span className="OnTheWay flightInfo">В пути</span>
              <span className="flightTime">
                {getHours(segments[0].duration)}ч {getMinutes(segments[0].duration)}м
              </span>
            </div>
            <div className="departure departure2">
              <span className="OnTheWay flightInfo">В пути</span>
              <span className="flightTime">
                {getHours(segments[1].duration)}ч {getMinutes(segments[1].duration)}м
              </span>
            </div>
          </div>
          <div className="transfers info">
            <div className="departure departure1">
              <span className="numberOfTransfers flightInfo">{getStops(segments[0].stops)}</span>
              <span className={`airports ${segments[0].stops.length === 0 ? 'airportsNone' : ''}`}>
                {segments[0].stops.length === 0 ? 'none' : segments[0].stops.join(', ')}
              </span>
            </div>
            <div className="departure departure2">
              <span className="numberOfTransfers flightInfo">{getStops(segments[1].stops)}</span>
              <span className={`airports ${segments[1].stops.length === 0 ? 'airportsNone' : ''}`}>
                {segments[1].stops.length === 0 ? 'none' : segments[1].stops.join(', ')}
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
