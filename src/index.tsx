import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";   // 👈 Tailwind styles
import LocalSgJobs from "./LocalSgJobs.tsx";

const root = ReactDOM.createRoot(document.getElementById("root")!);
root.render(
  <React.StrictMode>
    <LocalSgJobs />
  </React.StrictMode>
);