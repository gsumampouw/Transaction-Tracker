import Classes from "./Card.module.css";
import Container from "bootstrap";

function Card(prop) {
  return (
    <div className={Classes.card}>

        {prop.children}

    </div>
  );
}

export default Card;
