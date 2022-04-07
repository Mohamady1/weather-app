import React from "react";
import { MdOutlineWrongLocation } from "react-icons/md";

function Error() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        gap: "20px",
      }}
    >
      <MdOutlineWrongLocation size={200} />
      <h1>City Not Found</h1>
    </div>
  );
}

export default Error;
