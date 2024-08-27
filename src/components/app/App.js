import AppHeader from "../appHeader/AppHeader";
import {BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { HomePage, Comics } from "../pages";

const App = () =>  {
    return (
        <Router>
            <div className="app">
                <AppHeader/>
                <main>
                    <Routes>
                        <Route path="/" element={<HomePage/>}/>
                        <Route path="/comics" element={<Comics/>}/>
                    </Routes>
                </main>
            </div>
        </Router>
    )
}
            {/* <SingleComic id = {82970}/> */}

export default App;