import ItemEvent from "../ItemEvent/ItemsEvent";
import style from "./event-list.module.css";
const ListEvent = ({ listEvent }) => {
  return (
    <ul className={style.list}>
      {listEvent.map((item) => (
        <ItemEvent eventItem={item} />
      ))}
    </ul>
  );
};

export default ListEvent;
