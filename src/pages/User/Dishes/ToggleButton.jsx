import React from "react";
import { Segmented } from "antd";

function ToggleButton({ toggleButton, setToggleButton }) {

  return (
    <div className="flex flex-col items-center mt-6">
      <Segmented
        options={["Home Food", "Home Masalas"]}
        value={toggleButton}
        onChange={setToggleButton}
        block
        className="w-full"
        style={{
          padding: "10px",
          fontSize: "16px",
          fontWeight: "bold",
        }}
      />
    </div>
  );
}

export default ToggleButton;
