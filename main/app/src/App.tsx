import React from "react";
import "./App.css";
import { HeyImCal } from "./components/HeyImCal";
import { NekoPonent } from "./components/Neko";

function App() {
    return (
        <div className="App">
            <div>
                <HeyImCal name="Cal" />
                <NekoPonent />
                <header className="App-header"></header>
            </div>
        </div>
    );
}

export default App;
