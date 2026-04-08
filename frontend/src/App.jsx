import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import { Toaster } from "react-hot-toast";
import Home from "./pages/Home";
import Found from "./pages/Found";
import Lost from "./pages/Lost";
import Report from "./pages/Report";
import Match from "./components/Match";
import AdminLogin from "./pages/AdminLogin";
import AdminDash from "./pages/AdminDash";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Signup />} />
        <Route path="/home" element={<Home />}></Route>
        <Route path="/found" element={<Found />}></Route>
        <Route path="/lost" element={<Lost />}></Route>
        <Route path="/checkReport" element={<Report />}></Route>
       <Route path="/match" element={<Match />} />
       <Route path="/admin/login" element={<AdminLogin />}></Route>
       <Route path="/admin-dashboard" element={<AdminDash />}></Route>

      </Routes>

      <Toaster position="top-center" reverseOrder={false} />
    </BrowserRouter>
  );
}

export default App;
