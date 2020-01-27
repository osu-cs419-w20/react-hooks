import React, { useState, useEffect } from 'react';

function Clock(props) {
  const [ date, setDate ] = useState(new Date());
  useEffect(() => {
    const timerId = setInterval(() => setDate(new Date()), 1000);
    return () => {
      clearInterval(timerId);
    };
  }, []);
  return (
    <h2>It is {date.toLocaleTimeString()}.</h2>
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
      <Clock />
    </div>
  );
}

export default App;
