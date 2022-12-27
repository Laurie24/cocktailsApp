import './App.css'
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from "./pages/Home.jsx";
import SingleCocktail from "./pages/SingleCocktail.jsx";

function App() {

  return (
    <>
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/cocktail/:Id" element={<SingleCocktail />} />

                <Route path="*" element={<Error />} />
            </Routes>
        </Router>
    </>
  )
}

export default App
