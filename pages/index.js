import ListEvent from "../containers/ListEvent/ListEvent";
import { getFeaturedEvents } from "../dummy-data";

const HomePage = () => {
  const featuredEvents = getFeaturedEvents();

  return <ListEvent listEvent={featuredEvents} />;
};

export default HomePage;
