import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import { Toaster } from "react-hot-toast";
import Home from "./pages/Home";
import Found from "./pages/Found";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Signup />} />
        <Route path="/home" element={<Home />}></Route>
        <Route path="/found" element={<Found />}></Route>
      </Routes>

      <Toaster position="top-center" reverseOrder={false} />
    </BrowserRouter>
  );
}

export default App;
