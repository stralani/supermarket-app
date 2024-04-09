import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import Main from "./Pages/Main";
import AppLayout from "./Layout/AppLayout";
import Public from "./Pages/PublicPage/Public";
import ProtectedRoute from "./Pages/ProtectedRoute";
import Login from "./Pages/Login/Login";
import Signup from "./Pages/Signup";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route path="/" element={<Public />} />
            <Route element={<ProtectedRoute />}>
              <Route path="/main" element={<Main />}></Route>
            </Route>

            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
