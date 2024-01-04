import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Home from "./pages/Home";
import Header from "./components/Header";
import NotFound from "./pages/NotFound";
import CartTotal from "./pages/CartTotal";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <ToastContainer />
        <Header />
        <div>
          <Routes>
            <Route path="/cart" element={<CartTotal />} />
            <Route path="/" element={<Home />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
