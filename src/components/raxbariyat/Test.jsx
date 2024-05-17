import { useState } from "react";


export const Test = ({h}) => {
    const [count, setCount] = useState(1);
    return (
      <ul>
        <button onClick={() => setCount(1)}>Info</button>
        <button onClick={() => setCount(2)}>work</button>
        <button onClick={() => setCount(3)}>Task</button>
        {count === 1 && <p>Info</p>}
        {count === 2 && <p>Work</p>}
        {count === 3 && <p>info</p>}
      </ul>
  );
};
