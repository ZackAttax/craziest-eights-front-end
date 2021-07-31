import React from "react";
import PropTypes from "prop-types";

const Card = (props) => {
  const dragStart = (e) => {
    const target = e.target;
    e.dataTransfer.setData("cardId", target.id);
    setTimeout(() => {
      target.style.display = "none";
    }, 0);
  };

  const imageURL = () => {
    const baseURL = "../../../assets/cards_png/";
    if (props.rank != "" && props.suit != "") {
      console.log(`${baseURL}${props.suit}${props.rank}.png`);
      return `${baseURL}${props.suit}${props.rank}.png`;
    } else if (props.specialCard != "") {
      console.log(`${baseURL}${props.specialCard}.png`);
      return `${baseURL}${props.specialCard}.png`;
    }
  };

  const dragOver = (e) => {
    e.stopPropagation();
  };

  return (
    <div
      id={props.id}
      className={props.className}
      draggable={props.draggable}
      onDragStart={dragStart}
      onDragOver={dragOver}
    >
      <img
        src={imageURL}
        alt={
          props.specialCard ? props.specialCard : `${props.rank}${props.suit}`
        }
      />
      {props.children}
    </div>
  );
};

Card.propTypes = {
  id: PropTypes.any,
  className: PropTypes.any,
  draggable: PropTypes.any,
  children: PropTypes.any,
  height: PropTypes.any,
  width: PropTypes.any,
  suit: PropTypes.string,
  rank: PropTypes.string,
  specialCard: PropTypes.string,
};

export default Card;
