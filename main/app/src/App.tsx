import React from "react";
import "./App.css";
import { HeyImCal } from "./components/HeyImCal";
import { NekoPonent } from "./components/Neko";
import { DiscordInfo } from "./components/DiscordInfo";

function App() {
    return (
        <div className="App">
            <div>
                <HeyImCal name="Cal" />
                <NekoPonent />
                <DiscordInfo />
                <header className="App-header"></header>
            </div>
        </div>
    );
}

export default App;
