import { Container } from "@material-ui/core";
import Navbar from "./components/navbar/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";

function App() {
    return (
        <Router>
            <Container maxWidth="lg">
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                </Routes>
            </Container>
        </Router>
    );
}

export default App;
