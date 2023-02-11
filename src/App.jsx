import { useState } from "react";
import "./App.css";
import About from "./components/About";
import Acheivements from "./components/Acheivements";
import { ContactUs } from "./components/ContactUs";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App  min-h-screen">
      <Header />
      <Hero />
      <About />
      <Acheivements />
      <Projects />
      <ContactUs />
    </div>
  );
}

export default App;
