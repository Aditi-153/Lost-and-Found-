import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import { Toaster } from "react-hot-toast";
import Home from "./pages/Home";
import Found from "./pages/Found";
import Lost from "./pages/Lost";
import Report from "./pages/Report";
import Search from "./pages/Search";

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
       <Route path="/search" element={<Search />} />

<Route path="/search" element={<Search />} />
      </Routes>

      <Toaster position="top-center" reverseOrder={false} />
    </BrowserRouter>
  );
}

export default App;
