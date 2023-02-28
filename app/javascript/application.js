import React from "react";
import ReactDOM from "react-dom/client";
import Hello from "./components/hello";

function App() {
  return (
    <div>
      <Hello />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
