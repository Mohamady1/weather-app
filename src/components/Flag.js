import React from "react";

function Flag({ flag }) {
  return (
    <div>
      <img
        className="loop"
        style={{ width: "100px", height: "100px", borderRadius: "50%" }}
        src={`https://countryflagsapi.com/png/${flag}`}
        alt=""
      />
    </div>
  );
}

export default Flag;
