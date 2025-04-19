import React from "react";

import "./App.css";
import RouterApp from "./routes/RouterApp";
import { BrowserRouter } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

function App() {
  return (
    <div className="app">
        <BrowserRouter>
          <RouterApp />
        </BrowserRouter>
    </div>
  );
}

export default App;
