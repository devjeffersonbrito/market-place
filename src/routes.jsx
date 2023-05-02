import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function AppRoutes() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default AppRoutes;
