import React from "react";
import PropTypes from "prop-types";
import { Pane, Heading } from "evergreen-ui";
import About from "./About";

const Navbar = (props) => {
  return (
    <Pane display="flex" padding={16} background="tint2" borderradius={3}>
      <Pane flex={1} alignItems="center" display="flex">
        <Heading size={800}>Craziest Eights</Heading>
      </Pane>
      <Pane>
        <About show={props.newVisit} />
      </Pane>
    </Pane>
  );
};

Navbar.propTypes = {
  newVisit: PropTypes.bool,
};

Navbar.defaultProps = {
  newVisit: false,
};

export default Navbar;
