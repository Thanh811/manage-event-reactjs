import Link from "next/link";
import Buttons from "../../components/Buttons/Buttons";
import style from "./event-item.module.css";
import DateIcon from "../../components/icons/date-icon";
import LocationIcon from "../../components/icons/address-icon";
import ArrowRightIcon from "../../components/icons/arrow-right-icon";
const ItemEvent = ({ eventItem }) => {
  const { id, title, location, date, image } = eventItem;
  const timeFormat = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  const locationFormat = location.replace(", ", "\n");
  const formatLink = "events/" + id;
  return (
    <li className={style.item}>
      <img src={"/" + image} alt={image} />
      <div className={style.content}>
        <h2>{title}</h2>
        <div className={style.date}>
          <DateIcon />
          <time>{timeFormat}</time>
        </div>
        <div className={style.address}>
          <LocationIcon />
          <address>{locationFormat}</address>
        </div>
        <div className={style.actions}>
          <Buttons link={formatLink}>
            <span>Explore event</span>
            <span className={style.icon}>
              <ArrowRightIcon />
            </span>
          </Buttons>
        </div>
      </div>
    </li>
  );
};

export default ItemEvent;
