import './Ticket.css';
import S7 from '../../images/S7 Logo.png';

export const Ticket = () => {
  return (
    <>
      <div className="ticket">
        <div className="ticketHeader">
          <span className="price">13 400 Р</span>
          <img className="airline" src={S7} />
        </div>
        <div className="ticketFooter">
          <div className="flightInfo info">
            <div className="departure departure1">
              <span className="route flightInfo">MOW – HKT</span>
              <span className="departureTime">10:45 – 08:00</span>
            </div>
            <div className="departure departure2">
              <span className="route flightInfo">MOW – HKT</span>
              <span className="departureTime">11:20 – 00:50</span>
            </div>
          </div>
          <div className="flightTime info">
            <div className="departure departure1">
              <span className="OnTheWay flightInfo">В пути</span>
              <span className="flightTime">21ч 15м</span>
            </div>
            <div className="departure departure2">
              <span className="OnTheWay flightInfo">В пути</span>
              <span className="flightTime">13ч 30м</span>
            </div>
          </div>
          <div className="transfers info">
            <div className="departure departure1">
              <span className="numberOfTransfers flightInfo">2 пересадки</span>
              <span className="airports">HKG, JNB</span>
            </div>
            <div className="departure departure2">
              <span className="numberOfTransfers flightInfo">1 пересадка</span>
              <span className="airports">HKG</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
