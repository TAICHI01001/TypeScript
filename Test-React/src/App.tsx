import { useState } from 'react'
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

const App: React.FC = () => {
  const [count, setCount] = useState(0)
  // let count = 0;

  // const increment = () => {
  //   count = count + 1;
  //   // ไม่มีการอัปเดต component state
  //   // การเปลี่ยนแปลงนี้จะไม่ทำให้ component รีเรนเดอร์
  // };

  // const decrement = () => {
  //   count = count - 1;
  //   // ไม่มีการอัปเดต component state
  //   // การเปลี่ยนแปลงนี้จะไม่ทำให้ component รีเรนเดอร์
  // };
  return (
    <>
      {/* <div>
        <h2>Counter without useState</h2>
        <p>Count: {count}</p>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
      // </div> */}
      // <div>
      //   <a href="https://vitejs.dev" target="_blank">
      //     <img src={viteLogo} className="logo" alt="Vite logo" />
      //   </a>
      //   <a href="https://react.dev" target="_blank">
      //     <img src={reactLogo} className="logo react" alt="React logo" />
      //   </a>
      // </div>
      // <h1>Vite + React</h1>
      // <div className="card">
      //   <button onClick={() => setCount((count) => count + 1)}>
      //     count is {count}
      //   </button>
      //   <p>
      //     Edit <code>src/App.tsx</code> and save to test HMR
      //   </p>
      // </div>
      // <p className="read-the-docs">
      //   Click on the Vite and React logos to learn more
      // </p>
    </>
  );
};

export default App;
