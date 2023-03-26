import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route}from "react-router-dom";
import "./App.scss";
import Home from "./pages/Home/Home";


const App = () => {
  const [eras, setEras] = useState([]);

  const getEras = async () => {
    const res = await fetch("http://localhost:8080/eras");
    const data = await res.json();
    setEras(data);
  };

  useEffect(()=>{
    getEras();
  },[])

  return (
    <Router>
      <div className="app">
      <Routes>
          <Route path="/" element={<Home eras={eras}/>} />
      </Routes>
      </div>
    </Router>
  );
};

export default App;
