import React, { useState } from "react";
import { Pane, Dialog, Button } from "evergreen-ui";

const HowToPlay = () => {
  const [isShown, setIsShown] = useState(false);

  return (
    <Pane>
      <Dialog
        isShown={isShown}
        title="How To Play Crazy Eights"
        onCloseComplete={() => setIsShown(false)}
        hasCancel={false}
        confirmLabel="Back to the game!"
      >
        How to play crazy eights
      </Dialog>

      <Button onClick={() => setIsShown(true)}>Help</Button>
    </Pane>
  );
};

export default HowToPlay;
