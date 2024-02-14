import { useState } from "react";
import "./Button.scss";

const MovingButton = () => {
  const [position, setPosition] = useState({
    left: "",
    top: ""
  })

  const move = () => {
    const RandomX = Math.random() * 90 + "%";
    const RandomY = Math.random() * 92 + "%";
    setPosition({
      left: RandomX,
      top: RandomY
    })
  };

  const handleClick = () => {
    console.log()
  }

  return (
    <input
      value="NO"
      className="btn btn-active btn-ghost my-button btn__moving"
      id="button"
      onClick={handleClick}
      onMouseEnter={move}
      onMouseUp={move}
      onMouseOver={move}
      type="button"
      style={{
        left: position.left ,
        top: position.top
      }}
    />
  );
};

export default MovingButton;
