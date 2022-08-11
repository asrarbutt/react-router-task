import React from 'react';

import './App.css';
import {HashRouter, Route, Routes} from "react-router-dom";
import WelcomePage from "./components/WelcomePage";
import ActionPage from "./components/ActionPage";
import Login from "./components/Login";

function App() {


    return (
        <div>
            <HashRouter>
                <Routes>
                    <Route path={"/login"} element={<Login/>}/>
                    <Route path={"/"} element={<ActionPage/>}/>
                    <Route path={"/welcome/:name"} element={<WelcomePage/>}/>


                </Routes>
            </HashRouter>


        </div>
    );
}

export default App;
