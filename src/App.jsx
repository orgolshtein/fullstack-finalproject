import { Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./components/games-section/Home";
import NewGames from "./components/games-section/NewGames";
import SlotGames from "./components/games-section/SlotGames";
import TableGames from "./components/games-section/TableGames";

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
