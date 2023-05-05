import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import PriceList from "./components/PriceList/PriceList";

function App() {
  return (
    <>
      <Navbar />
      <h1 className="text-7xl text-purple-600">Hello from Tailwind</h1>
      <PriceList />
    </>
  );
}

export default App;
