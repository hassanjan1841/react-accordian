import { useState } from "react";
import "./styles.css";

const RandomColorGenerator = () => {
  const [color, setColor] = useState("");
  const [hex, setHex] = useState(true);
  const [rgb, setRGB] = useState(false);
  const toggleHex = () => {
    setHex(!hex);
    setRGB(false);
  };
  const toggleRGB = () => {
    setRGB(!rgb);
    setHex(false);
  };

  const randomGenerator = () => {
    if (hex) {
      const randomColor = Math.floor(Math.random() * 16777215).toString(16);
      setColor(`#${randomColor}`);
    } else if (rgb) {
      const randomColor = `${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}`;
      setColor(`rgb(${randomColor})`);
    }
  };
  return (
    <div className="element-primary flex-center h-[40vh] w-[800px] flex-col">
      <div className="flex-center my-4 gap-4">
        <span
          className={hex ? "btn-active" : "btn-primary"}
          onClick={() => toggleHex()}
        >
          Create HEX Color
        </span>
        <span
          className={rgb ? "btn-active" : "btn-primary"}
          onClick={() => toggleRGB()}
        >
          Create RGB COlor
        </span>
        <button className="btn-primary" onClick={() => randomGenerator()}>
          Generate Random Color
        </button>
      </div>
      <div
        className="flex-center flex-end relative h-[30vh] w-[700px] rounded shadow-md shadow-[#000]"
        style={{ background: color }}
      >
        <span className="color-text-area absolute bottom-5 text-4xl text-[#000]">
          {color.toUpperCase()}
        </span>
      </div>
    </div>
  );
};

export default RandomColorGenerator;
