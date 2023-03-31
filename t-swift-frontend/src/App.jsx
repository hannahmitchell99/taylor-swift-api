import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.scss";
import Album from "./pages/Album/Album";
import Home from "./pages/Home/Home";
import AllStyle from "./pages/AllStyle/AllStyle";
import AllAlbum from "./pages/AllAlbum/AllAlbum";
import Style from "./pages/Style/Style";

const App = () => {
  const [eras, setEras] = useState([]);
  const [input, setInput] = useState("");
  const [highRating, setHighRating] = useState(false);
  const [masters, setMasters] = useState(false);

  const getEras = async () => {
    let data = [];
    let url = "http://localhost:8080/eras";
    if (masters) {
      url += `/masters`;
    }
    if (highRating) {
      url += `/rating`;
    }
    const res = await fetch(url);
    data = await res.json();
    let newData = data.filter(
      (era) =>
        era.eraName.toLowerCase().includes(input) ||
        era.albumOfEra.name.toLowerCase().includes(input)
    );
    setEras(newData);
  };

  useEffect(() => {
    getEras();
  }, [masters, highRating, input]);

  const handleInput = (event) => {
    setInput(event.target.value.toLowerCase());
    console.log(input);
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
          <Route
            path="/album"
            element={<AllAlbum eras={eras} andleInput={handleInput}
            handleHighRating={handleHighRating}
            handleMasters={handleMasters}/>}
          />
          <Route
            path="/style"
            element={<AllStyle eras={eras} handleInput={handleInput}
            handleHighRating={handleHighRating}
            handleMasters={handleMasters}/>}
          />
          <Route path="/album/:eraID" element={<Album eras={eras} />}></Route>
          <Route path="/style/:eraID" element={<Style eras={eras} />}></Route>
        </Routes>
      </div>
    </Router>
  );
};

export default App;
