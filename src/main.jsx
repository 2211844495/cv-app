import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Route, Router } from "wouter";
import "./index.css";
import App from "./App";
import Page from "./Page";
const Routes = () => {
  return (
    <Router>
      <Route path="/" component={App} />
      <Route path="/page" component={Page} />
    </Router>
  );
};

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Routes />
  </StrictMode>
);
