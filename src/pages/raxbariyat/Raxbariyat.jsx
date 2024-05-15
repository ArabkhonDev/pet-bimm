import "./raxbariyat.css";
import { useState } from "react";
import { Info } from "../../components/raxbariyat/Info";

import { getInfoHuman } from "../../data/human";
import { Work } from "../../components/raxbariyat/Work";
import { Task } from "../../components/raxbariyat/Task";

export const Raxbariyat = () => {
  const human = getInfoHuman();
  const [count, setCount] = useState(1);
  return (
    <>
      <div className="raxbariyat">
        <div className="container">
          <div className="raxbariyat_main">
            <div className="raxbariyat_title">
              <h2>Mamuryat</h2>
                <div>
                  <div className="person_info_btns">
                    <button onClick={() => setCount(1)}>Info</button>
                    <button onClick={() => setCount(2)}>Work</button>
                    <button onClick={() => setCount(3)}>Task</button>
                  </div>
                  <div className="person_info">
                      <>
                        {count === 1 && <Info />}
                        {count === 2 && <Work />}
                        {count === 3 && <Task />}
                      </>
                  </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
