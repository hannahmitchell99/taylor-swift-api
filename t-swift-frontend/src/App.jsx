import { useEffect } from "react";
import "./App.scss";
import EraCardContainer from "./containers/EraCardContainer/EraCardContainer";
import Nav from "./containers/Nav/Nav";

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
      App
      <Nav />
      <EraCardContainer eras={eras}/>
    </div>
  );
};

export default App;
