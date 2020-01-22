import React, { useState, useEffect } from 'react';

function Clock(props) {
  return (
    <h2>It is {props.date.toLocaleTimeString()}.</h2>
  );
}

function CountingButton() {
  // const count = 0;
  const [ count, setCount ] = useState(0);
  useEffect(() => {
    document.title = `${count} clicks`;
  }, [ count ]);
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(prevCount => prevCount + 1)}>
        Click me
      </button>
    </div>
  );
}

function App() {
  return (
    <div>
      <CountingButton />
    </div>
  );
}

export default App;
