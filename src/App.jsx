import Create from "./components/create";
import "./App.css";
import Read from "./components/read";
import Update from "./components/update";
import Delete from "./components/delete";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route Component={Create} path="/" />

      <Route Component={Read} path="/Read" />

      <Route Component={Update} path="/Update/:id" />
      <Route Component={Delete} path="/Read" />
    </Routes>
  );
}

export default App;
