import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/hero/hero";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <main className="main">
        <Hero />
      </main>
    </>
  );
}

export default App;