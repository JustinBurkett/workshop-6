import { useState } from "react";

interface TicketCounterProps {
  eventTitle: string;
  maxTickets: number;
}

export function TicketCounter({ eventTitle, maxTickets }: TicketCounterProps) {
  const [ticketCount, setTicketCount] = useState(0);

  const handleIncrement = () => {
    if (ticketCount < maxTickets) {
      setTicketCount(ticketCount + 1);
    }
  };

  const handleDecrement = () => {
    if (ticketCount > 0) {
      setTicketCount(ticketCount - 1);
    }
  };

  return (
    <div className="ticket-counter">
      <label>Tickets:</label>
      <div className="counter-controls">
        <button
          onClick={handleDecrement}
          disabled={ticketCount === 0}
        >
          −
        </button>
        <span className="count">{ticketCount}</span>
        <button
          onClick={handleIncrement}
          disabled={ticketCount === maxTickets}
        >
          +
        </button>
      </div>
      {ticketCount > 0 && (
        <p className="selection-summary">
          {ticketCount} ticket{ticketCount !== 1 ? 's' : ''} selected for {eventTitle}.
        </p>
      )}
    </div>
  );
}
