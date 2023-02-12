import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home.jsx'
import SingleCocktail from './pages/SingleCocktail.jsx'
import Error from './pages/Error.jsx'
const App = () => {
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
