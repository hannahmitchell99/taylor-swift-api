import { useEffect, useState } from "react";
import "./App.scss";
import EraCardContainer from "./containers/EraCardContainer/EraCardContainer";
import Nav from "./containers/Nav/Nav";
import { PageAlbumCardContainer } from "./containers/PageAlbumCardContainer/PageAlbumCardContainer";
import { PageStyleCardContainer } from "./containers/PageStyleCardContainer/PageStyleCardContainer";

const App = () => {
  const [eras, setEraType] = useState([]);

  const getEras = async () => {
    const res = await fetch("http://localhost:8080/eras");
    const data = await res.json();
    setEraType(data);
  };

  useEffect(()=>{
    getEras();
  })

  return (
    <div className="App">
      <Nav />
      <EraCardContainer eras={eras}/>
      <PageAlbumCardContainer eras={eras}/>
      <PageStyleCardContainer eras={eras}/>
    </div>
  );
};

export default App;
