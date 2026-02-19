import React, { useState, useCallback } from "react";

/*
  Toggle between:
  - WITHOUT useCallback
  - WITH useCallback

  Open console to see render logs.
*/

const Child = React.memo(({ onClick }) => {
  console.log("Child Rendered");
  return (
    <div style={{ padding: "10px", border: "1px solid black", marginTop: 10 }}>
      <button onClick={onClick}>Child Button</button>
    </div>
  );
});

export default function ReactMemo() {
  const [count, setCount] = useState(0);
  const [other, setOther] = useState(false);

  // ❌ VERSION 1 — BREAKS memo (new function every render)
  // const handleClick = () => {
  //   console.log("Child Clicked");
  // };

  // ✅ VERSION 2 — WORKS with memo (stable reference)
  const handleClick = useCallback(() => {
    console.log("Child Clicked");
  }, []);

  console.log("Parent Rendered");

  return (
    <div style={{ padding: 20 }}>
      <h2>Count: {count}</h2>

      <button onClick={() => setCount(c => c + 1)}>
        Increment Count
      </button>

      <button onClick={() => setOther(o => !o)} style={{ marginLeft: 10 }}>
        Toggle Other State
      </button>

      <Child onClick={handleClick} />
    </div>
  );
}
