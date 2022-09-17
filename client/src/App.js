import "./App.css";
import { Route } from "react-router-dom";
import LandingPage from "./pages/landingPage";
import Home from "./pages/homePage";
import CountryDetail from "./pages/countryDetail";

function App() {
  return (
    <div className="App">
      {/* <h1>Henry Countries</h1> */}
      <Route exact path="/" component={LandingPage} />

      <Route path="/home" component={Home} />

      <Route path="/countries/:id" component={CountryDetail} />

      <Route path="/activities">
        <div>Detalle Activities</div>
      </Route>
    </div>
  );
}

export default App;
