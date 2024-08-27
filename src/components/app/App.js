import AppHeader from "../appHeader/AppHeader";
import {BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { HomePage, Comics, Page404, SingleComicPage } from "../pages";

const App = () =>  {
    return (
        <Router>
            <div className="app">
                <AppHeader/>
                <main>
                    <Routes>
                        <Route path="/" element={<HomePage/>}/>
                        <Route path="/comics" element={<Comics/>}/>
                        <Route path="/comics/:comicId" element={<SingleComicPage/>}/>

                        <Route path="*" element={<Page404/>}/>
                    </Routes>
                </main>
            </div>
        </Router>
    )
}


export default App;