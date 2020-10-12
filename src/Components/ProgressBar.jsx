import React, { useEffect, useState } from "react";
import "../Scss/ProgressBar.scss";

const ProgressBar = ({ scroll }) => {
  const [progressStyle, setProgressStyle] = useState();

  const setProgressBar = (scroll) => {
    const heigth = scroll.scrollHeight - scroll.offsetHeight;
    const calc = (scroll.scrollTop / heigth) * 100;
    if (calc > 99) {
      setProgressStyle({ width: calc + "%", zIndex: -1 });
    } else {
      setProgressStyle({ width: calc + "%", zIndex: 1 });
    }
  };

  useEffect(() => {
    setProgressBar(scroll);
  }, [scroll]);

  return (
    <>
      <div className="progress-bar" style={progressStyle}></div>
    </>
  );
};

export default ProgressBar;
