import { getAllEvents } from "../../dummy-data";
import ListEvent from "../../containers/ListEvent/ListEvent";
import EventsSearch from "../../containers/EventSearch/event-search";

const AllEventsPage = () => {
  const events = getAllEvents();
  return (
    <div>
      <EventsSearch />
      <ListEvent listEvent={events} />;
    </div>
  );
};
export default AllEventsPage;
