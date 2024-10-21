import "./App.css";
import { Routes, Route } from "react-router-dom"; 
import Home from './Components/Home';
import Create from "./Components/Create";
import Update from "./Components/Update";


function App() {
  return (
    <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<Create />} />
          <Route path="/edit/:id" element={<Update />} />
        </Routes>
    </div>
  );
}

export default App;
