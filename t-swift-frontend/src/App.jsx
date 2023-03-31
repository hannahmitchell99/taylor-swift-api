import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.scss";

import { PageAlbumCardContainer } from "./containers/PageAlbumCardContainer/PageAlbumCardContainer";
import { PageStyleCardContainer } from "./containers/PageStyleCardContainer/PageStyleCardContainer";
import Album from "./pages/Album/Album";
import Home from "./pages/Home/Home";

const App = () => {
  const [showEras, setShowEras] = useState(false);
  const [eras, setEras] = useState([]);
  const [input, setInput] = useState("");
  const [highRating, setHighRating] = useState(false);
  const [masters, setMasters] = useState(false);

  const getEras = async () => {
    let data = [];
    let url = "http://localhost:8080/eras"
    if (masters){
      url += `/masters`
    }if (highRating){
      url += `/rating`
    } 
    const res = await fetch(url);
    data = await res.json();
    let newData = data.filter((era) => (
        era.eraName.toLowerCase().includes(input) ||
        era.albumOfEra.name.toLowerCase().includes(input)
      ))
    setEras(newData);
    };


  useEffect(() => {
    getEras();
  }, [masters, highRating, input]);

  const handleInput = (event) => {
    setInput(event.target.value.toLowerCase());
    console.log(input)
  };



  const handleHighRating = () => {
    setHighRating(!highRating);
    console.log(highRating);
  };

  const handleMasters = () => {
    console.log(masters);
    setMasters(!masters);
  };

  return (
    <Router>
      <div className="app">
        <Routes>
          <Route
            path="/"
            element={
              <Home
                eras={eras}
                handleInput={handleInput}
                handleHighRating={handleHighRating}
                handleMasters={handleMasters}
              />
            }
          />
          <Route path = "/album" element={<PageAlbumCardContainer eras= {eras}/>}/>
          <Route path = "/style" element={<PageStyleCardContainer eras={eras}/>}/>
          <Route
        path = "/album/:eraId"
        element={
          <Album eras={eras}/>
        }>
        </Route>
        </Routes>
      </div>
    </Router>
  );
};

export default App;
