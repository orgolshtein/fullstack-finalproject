import { Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import InnerLayout from "./layouts/InnerLayout";
import Home from "./components/games-section/Home";
import NewGames from "./components/games-section/NewGames";
import SlotGames from "./components/games-section/SlotGames";
import TableGames from "./components/games-section/TableGames";
import NotFound from "./components/NotFound";

function App() {
  
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="/" element={<InnerLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/new" element={<NewGames />} />
            <Route path="/slots" element={<SlotGames />} />
            <Route path="/table" element={<TableGames />} />
          </Route>
          <Route path="*" element={<NotFound/>} />
        </Route>
      </Routes>
  </>
  )
}

export default App;
