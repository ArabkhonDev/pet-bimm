import { useState } from "react";


export const Test = ({h}) => {
    const [count, setCount] = useState(1);
    return (
      <ul>
        <button onClick={() => setCount(1)}>work</button>
        <button onClick={() => setCount(2)}>Info</button>
        {count === 1 && <p>Work</p>}
        {count === 2 && <p>info</p>}
      </ul>
  );
};
