import "./App.css";
import { Route } from "react-router-dom";
import LandingPage from "./pages/landingPage";
import Home from "./pages/homePage";

function App() {
  return (
    <div className="App">
      {/* <h1>Henry Countries</h1> */}
      <Route exact path="/">
        <LandingPage/>
      </Route>
      <Route path="/home">
        <Home/>
      </Route>
      <Route path="/countries">
        <div>Detalle Pais</div>
      </Route>
      <Route path="/activities">
        <div>Detalle Activities</div>
      </Route>
    </div>
  );
}

export default App;
