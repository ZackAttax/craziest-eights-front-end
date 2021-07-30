import React from "react";
import PropTypes from "prop-types";
//import Card from "../Card/Card";

const Board = (props) => {
  const drop = (e) => {
    e.preventDefault();
    const cardId = e.dataTransfer.getData("cardId");

    const card = document.getElementById(cardId);
    card.style.display = "block";

    e.target.appendChild(card);
  };

  const dragOver = (e) => {
    e.preventDefault();
  };

  return (
    <div
      id={props.id}
      className={props.className}
      onDrop={drop}
      onDragOver={dragOver}
    >
      {props.children}
    </div>
  );
};

Board.propTypes = {
  id: PropTypes.any,
  className: PropTypes.any,
  draggable: PropTypes.any,
  children: PropTypes.any,
};

export default Board;
