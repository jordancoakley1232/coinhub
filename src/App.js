import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ScrollUpButton from "react-scroll-up-button";
import "./App.css";

// Constant Render Components
import NavBar from "./Components/Navbar/Navbar";
import MarketHighlights from "./Components/MarketHighlights/MarketHighlights";
import CallToAction from "./Components/CallToAction/CallToAction";

// Routes for list and Search Bar Render
import Home from './Pages/Home';
import GainersPage from "./Pages/GainersPage";
import LosersPage from "./Pages/LosersPage";


const App2 = () => {
    return (
        <Router>
            <div className="App">
                <NavBar />
                <MarketHighlights />
                <Switch>
                    <Route path="/coinhub" exact component={Home} />
                    <Route path="/gainers" exact component={GainersPage} />
                    <Route path="/losers" exact component={LosersPage} />
                </Switch>
                <CallToAction />
                <ScrollUpButton />
            </div>
        </Router>
    )
}

// In each route we need the search bar and list of coins. 
export default App2
