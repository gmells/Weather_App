import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// Create a root container instead of directly calling render
const root = ReactDOM.createRoot(document.getElementById("root"));

// Render the app using the new API
root.render(<App />);
