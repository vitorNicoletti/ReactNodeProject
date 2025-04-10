import { BrowserRouter, Routes, Route } from "react-router-dom";
import Info from "./pages/listar";
import MoreInfo from "./pages/more-details";
import Adm from "./pages/adm";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Info />} />
        <Route path="/info/:id" element={<MoreInfo />} />
        <Route path="/adm" element={<Adm />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
