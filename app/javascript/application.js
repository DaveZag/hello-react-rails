import React from "react";
import ReactDOM from "react-dom/client";
import Hello from "./components/hello.js";

function App() {
  return (
    <div>
      <Hello />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
