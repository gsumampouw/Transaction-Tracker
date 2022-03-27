import Classes from "./Card.module.css";
import Container from "bootstrap";

function Card(prop) {
  return (
    <div className={Classes.card}>
      <div className="card-body container-sm bg-dark text-white">
        {prop.children}
      </div>
    </div>
  );
}

export default Card;
