import { useRouter } from "next/router";
import { getEventById } from "../../dummy-data";
import EventContent from "../../containers/event-detail/event-content";
import EventLogistics from "../../containers/event-detail/event-logistics";
import EventSummary from "../../containers/event-detail/event-summary";
const DetailEventPage = () => {
  const router = useRouter();
  const eventId = router.query.id;

  const event = getEventById(eventId);
  if (!event) return <p>Not event current</p>;
  return (
    <>
      <EventSummary title={event.title} />
      <EventLogistics
        date={event.date}
        address={event.location}
        image={event.image}
        imageAlt={event.title}
      />
      <EventContent>
        <p>{event.description}</p>
      </EventContent>
      <EventSummary title={event.title}></EventSummary>
    </>
  );
};
export default DetailEventPage;
