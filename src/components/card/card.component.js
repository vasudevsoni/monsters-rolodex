import { Component } from "react";
import "./card.styles.css";

class Card extends Component {
  render() {
    const { id, name, email } = this.props.monster;

    return (
      <div key={id} className="card-container">
        <img
          alt={`monster ${name}`}
          src={`https://robohash.org/${id}?set=set2&size=180x180`}
        />
        <h2>{name}</h2>
        <a href={`mailto:${email}`}>
          <h3>{email}</h3>
        </a>
      </div>
    );
  }
}

export default Card;
