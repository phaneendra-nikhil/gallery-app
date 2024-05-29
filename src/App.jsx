import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Nav from "./components/Nav";
import Homepage from "./pages/Homepage";

function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route path="/" element={<Homepage />} />
                    <Route path="/planes" element={<Nav />} />
                    <Route path="/destinations" element={<Nav />} />
                    <Route path="/guide" element={<Nav />} />
                    <Route path="/about" element={<Nav />} />
                    <Route path="/login" element={<Nav />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
