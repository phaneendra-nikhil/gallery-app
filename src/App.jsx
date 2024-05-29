import "./App.css";
import Footer from "./components/Footer";
import Bestdeals from "./pages/Bestdeals";
import Homepage from "./pages/Homepage";
import Topplaces from "./pages/Topplaces";

function App() {
    return (
        <>
            <div className="App">
                <Homepage />
                <Bestdeals />
                <Topplaces />
                <Footer />
            </div>
        </>
    );
}

export default App;
