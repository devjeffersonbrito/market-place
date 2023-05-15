import Footer from "./layout/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Cart from "./pages/Cart/Cart";
import Sell from "./pages/Sell/Sell";

import Container from "./layout/Container/Container";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function AppRoutes() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Container containerWidth='page__width' containerHeight='page__height'>
          <Routes>
            <Route index element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/sell" element={<Sell />} />
          </Routes>
        </Container>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default AppRoutes;
