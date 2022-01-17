import Link from "next/link";
import style from "./button.module.css";
function Buttons(props) {
  return (
    <Link href={props.link}>
      <a className={style.btn}>{props.children}</a>
    </Link>
  );
}

export default Buttons;
