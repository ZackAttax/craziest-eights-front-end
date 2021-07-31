import React, { useState } from "react";
import PropTypes from "prop-types";
import { Pane, Dialog, Button } from "evergreen-ui";

const About = (props) => {
  const [isShown, setIsShown] = useState(props.show);

  return (
    <Pane>
      <Dialog
        isShown={isShown}
        title="About"
        onCloseComplete={() => setIsShown(false)}
        hasCancel={false}
        confirmLabel="Back to the game!"
      >
        Here is where we talk about the game
      </Dialog>

      <Button onClick={() => setIsShown(true)}>About</Button>
    </Pane>
  );
};

About.propTypes = {
  show: PropTypes.bool,
};

About.defaultProps = {
  show: false,
};

export default About;
