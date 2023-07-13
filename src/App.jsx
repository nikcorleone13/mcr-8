import { React } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import EventPage from "./pages/EventPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/events/:eId" element={<EventPage />} />
    </Routes>
  );
}

export default App;
