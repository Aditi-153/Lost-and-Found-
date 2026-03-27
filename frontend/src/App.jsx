import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup";
import { Toaster } from "react-hot-toast"; 

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Signup />} />
      </Routes>

      <Toaster 
      position="top-center" reverseOrder={false} />
    </BrowserRouter>
  );
}

export default App;