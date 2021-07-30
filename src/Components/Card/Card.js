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
      {props.children}
    </div>
  );
};

Card.propTypes = {
  id: PropTypes.any,
  className: PropTypes.any,
  draggable: PropTypes.any,
  children: PropTypes.any,
};

export default Card;
