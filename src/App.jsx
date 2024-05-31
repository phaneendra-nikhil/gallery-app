import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Nav from "./components/Nav";
import Create from "./pages/Create";
import Destinations from "./pages/Destinations";
import Homepage from "./pages/Homepage";
import Login from "./pages/Login";
import Planes from "./pages/Planes";

function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route path="/" element={<Homepage />} />
                    <Route path="/destinations" element={<Destinations />} />
                    <Route path="/guide" element={<Nav />} />
                    <Route path="/about" element={<Nav />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/create" element={<Create />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
