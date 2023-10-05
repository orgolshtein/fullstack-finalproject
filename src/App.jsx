import { Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./components/Home";
import NewGames from "./components/NewGames";
import SlotGames from "./components/SlotGames";
import TableGames from "./components/TableGames";

function App() {
  
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/new" element={<NewGames />} />
            <Route path="/slots" element={<SlotGames />} />
            <Route path="/table" element={<TableGames />} />
        </Route>
      </Routes>
  </>
  )
}

export default App;
