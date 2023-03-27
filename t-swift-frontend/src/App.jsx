import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route}from "react-router-dom";
import "./App.scss";
import Home from "./pages/Home/Home";


const App = () => {
  const [eras, setEras] = useState([]);
  const [input, setInput] = useState("")
  const [highRating, setHighRating]= useState(false);
  const [masters, setMasters] = useState(false);

  const getEras = async () => {
    const res = await fetch("http://localhost:8080/eras");
    const data = await res.json();
    setEras(data);
  };

  useEffect(()=>{
    getEras();
  },[])

  const handleInput = (event) => {
    console.log(input)
    setInput(event.target.value);
  }

  const handleHighRating = () => {
    console.log(highRating)
    setHighRating(!highRating);
  };

  const handleMasters = () => {
    console.log(masters)
    setMasters(!masters);
  };

  return (
    <Router>
      <div className="app">
      <Routes>
          <Route path="/" element={<Home eras={eras} handleInput = {handleInput} handleHighRating = {handleHighRating} handleMasters={handleMasters}/>} />
      </Routes>
      </div>
    </Router>
  );
};

export default App;
