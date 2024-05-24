import "./App.css";
import Footer from "./components/Footer";
import Destination from "./pages/Bestdeals";
import Homepage from "./pages/Homepage";

function App() {
    return (
        <>
            <div className="App">
                <Homepage />
                <Destination />
                <Footer />
            </div>
        </>
    );
}

export default App;
