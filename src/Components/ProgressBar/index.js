import React from "react";

const ProgressBar = ({ progress, height }) => {
  const bgcolor =
    progress <= 15
      ? "red"
      : progress <= 30
      ? "orange"
      : progress < 100
      ? "#99ccff"
      : progress === 100
      ? "#99ff66"
      : null;

  const Parentdiv = {
    height: height,
    width: "100%",
    backgroundColor: "whitesmoke",
    borderRadius: 40,
    marginTop: 10,
    border: "2px solid",
  };

  const Childdiv = {
    height: "100%",
    width: `${progress}%`,
    backgroundColor: bgcolor,
    borderRadius: 40,
    textAlign: "right",
    border: { bgcolor },
  };

  const progresstext = {
    padding: 10,
    color: "black",
    fontWeight: 900,
  };

  return (
    <div style={Parentdiv}>
      <div style={Childdiv}>
        <span style={progresstext}>{`${progress}%`}</span>
      </div>
    </div>
  );
};

export default ProgressBar;
