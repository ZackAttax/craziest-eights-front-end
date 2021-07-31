import React from "react";
import PropTypes from "prop-types";
import * as Faces from "./CardFaces";

const CardFace = (props) => {
  const determineFace = () => {
    let componentName = "";
    const numberCard = props.rank > 1 && props.rank < 11;
    switch (props.suit) {
      case "S":
        componentName += "Spade";
        break;
      case "C":
        componentName += "Club";
        break;
      case "D":
        componentName += "Diamond";
        break;
      case "H":
        componentName += "Heart";
        break;
      default:
        null;
    }
    switch (props.rank) {
      case "A":
        componentName += "1";
        break;
      case "K":
        componentName += "13King";
        break;
      case "Q":
        componentName += "13King";
        break;
      case "J":
        componentName += "13King";
        break;
      case numberCard:
        componentName += props.rank;
        break;
      default:
        componentName += "Back";
        break;
    }
    return componentName;
  };

  const CardComponent = React.createElement(determineFace(), {
    height: props.height,
    width: props.width,
  });

  return (
    <div>
      <CardComponent />
    </div>
  );
};

CardFace.propTypes = {
  rank: PropTypes.string,
  suit: PropTypes.string,
  height: PropTypes.any,
  width: PropTypes.any,
  preserveAspectRatio: PropTypes.string,
};

CardFace.defaultProps = {
  height: "100%",
  preserveAspectRatio: "xMinYMin slice",
  width: "100%",
};

export default CardFace;
