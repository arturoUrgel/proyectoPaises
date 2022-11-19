import "./App.css";
import { Route, useLocation } from "react-router-dom";
import LandingPage from "./pages/landingPage";
import Home from "./pages/homePage";
import CountryDetail from "./pages/countryDetail";
import FormActivity from "./pages/activity/ActivityForm";
import NavBar from "./pages/homePage/components/NavBar";

function App() {
  let location = useLocation();
  return (
    <div className="App">
      {location.pathname !== "/" && <NavBar />}
      <Route exact path="/" component={LandingPage} />
      <Route path="/home" component={Home} />
      <Route path="/countries/:id" component={CountryDetail} />
      <Route path="/activities/createActivity" component={FormActivity} />
    </div>
  );
}

export default App;
