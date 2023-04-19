import { useState } from "react";
import "./clock.scss";

const Clock = () => {
  let time = new Date().toLocaleTimeString();
  const [currentTime, setCurrentTime] = useState(time);

  const updateTime = () => {
    let time = new Date().toLocaleTimeString();
    setCurrentTime(time);
  };
  setInterval(updateTime, 1000);
  return (
    <div className="clockContainer">
      <h2 className="clock">{currentTime}</h2>
    </div>
  );
};

export default Clock;
