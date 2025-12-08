import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import PersonDetail from "./pages/PersonDetail.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/personagem/:id" element={<PersonDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
