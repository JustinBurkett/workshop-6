import { Event } from "../data/events";
import { TicketCounter } from "./TicketCounter";

interface EventCardProps {
  event: Event;
}

export function EventCard({ event }: EventCardProps) {
  return (
    <div className="event-card">
      <div className="event-header">
        <h3>{event.title}</h3>
        <span className="category-badge">{event.category}</span>
      </div>
      <p><strong>Date:</strong> {event.date}</p>
      <p><strong>Venue:</strong> {event.location}</p>
      <p><strong>Price:</strong> {event.price === 0 ? 'Free' : `$${event.price}`}</p>
      <TicketCounter eventTitle={event.title} maxTickets={event.availableTickets} />
    </div>
  );
}
