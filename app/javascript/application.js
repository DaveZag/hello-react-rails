import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { store } from "./redux/configureStore";
import { Provider } from "react-redux";

import Greeting from "./components/Greeting.js";

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Greeting />} />
        </Routes>
      </BrowserRouter>
  )
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

/*  Better version of this app to be uncommented after code review. NB: It won't be deleted.
function App() {
  return (
    <div>
      <Greeting />
    </div>
  );
}
*/ 