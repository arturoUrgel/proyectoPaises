import "./App.css";
import { Route } from "react-router-dom";
import LandingPage from "./pages/landingPage";
import Home from "./pages/homePage";
import CountryDetail from "./pages/countryDetail";
import FormActivity from "./pages/activity/ActivityForm";
import NavBar from "./pages/homePage/components/NavBar";

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={LandingPage} />
      <NavBar />
      <Route path="/home" component={Home} />
      <Route path="/countries/:id" component={CountryDetail} />
      <Route path="/activities/createActivity" component={FormActivity} />
    </div>
  );
}

export default App;
