import { Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import InnerLayout from "./layouts/InnerLayout";
import Home from "./components/main-content/Home";
import NewGames from "./components/main-content/NewGames";
import SlotGames from "./components/main-content/SlotGames";
import TableGames from "./components/main-content/TableGames";
import NotFound from "./components/main-content/NotFound";

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
