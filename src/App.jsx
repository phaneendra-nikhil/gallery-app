import "./App.css";
import Footer from "./components/Footer";
import Destination from "./pages/Bestdeals";
import Homepage from "./pages/Homepage";
import Topplaces from "./pages/Topplaces";

function App() {
    return (
        <>
            <div className="App">
                <Homepage />
                <Destination />
                <Topplaces />
                <Footer />
            </div>
        </>
    );
}

export default App;
