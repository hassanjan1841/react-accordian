import { useState } from "react";
import data from "./data";
import "./styles.css";

const Accordion = () => {
  const [active, setActive] = useState([]);
  const [multiSelect, setMultiSelect] = useState(false);

  const handleSelect = (id) => {
    if (multiSelect) {
      setActive((prevActive) => {
        if (prevActive.includes(id)) {
          return prevActive.filter((itemId) => itemId !== id);
        } else {
          return [...prevActive, id];
        }
      });
    } else {
      if (active.includes(id)) {
        setActive((prevActive) => prevActive.filter((itemId) => itemId !== id));
      } else {
        setActive([id]);
      }
    }
  };

  return (
    <div className="wrapper">
      <div className="accordian">
        <button className="selectBtn" onClick={() => setMultiSelect(!multiSelect)}>
          {multiSelect ? "Single select" : "Multi select"}
        </button>
        {data.map((item) => {
          const isActive = active.includes(item.id);

          return (
            <div key={item.id} className="item ">
              <div
                onClick={() => handleSelect(item.id)}
                className="title cursor:pointer"
              >
                {item.question}
                <button className="cursor:pointer">
                  {isActive ? "-" : "+"}
                </button>
              </div>
              <div className={isActive ? "content-active" : "content-none"}>
                {item.answer}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Accordion;
