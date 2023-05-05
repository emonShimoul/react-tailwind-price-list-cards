import "./App.css";
import Dashboard from "./components/Dashboard/Dashboard";
import Navbar from "./components/Navbar/Navbar";
import PhoneBar from "./components/PhoneBar/PhoneBar";
import PriceList from "./components/PriceList/PriceList";

function App() {
  return (
    <>
      <Navbar />
      <h1 className="text-7xl text-purple-600">Hello from Tailwind</h1>
      <PriceList />
      <Dashboard />
      <PhoneBar />
    </>
  );
}

export default App;
