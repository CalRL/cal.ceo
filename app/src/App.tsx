import './App.css'
import {HeroText} from "./Hero.tsx";
import {Typewriter, type TypewriterOptions} from "./assets/Typewriter.tsx";

const options: TypewriterOptions = {
    delim: "_",
    content: "callum",
    delay: 300,
    pause: 1500
}

function App() {
  return (
    <>
        <HeroText />
        <Typewriter {...options} />
    </>
  )
}

export default App
