import "./App.css";
import "./normalize.css";
import Footer from "./Components/Footer";
import HomePage from "./Components/HomePage";
import ProductPage from "./Components/ProductPage";
import CheckOutPage from "./Components/CheckOutPage";
import { Redirect, Route, Switch } from "react-router-dom";
import MobileVerify from "./Components/MobileVerify";
import ThankYou from "./Components/ThankYou";
import NavBar from "./Components/NavBar";

function App() {
  return (
    <div className="App">
      <NavBar />
      <main>
        <Switch>
          <Route path="/home" component={HomePage} />
          <Route path="/product" component={ProductPage} />
          <Route path="/check-out" component={CheckOutPage} />
          <Route path="/mobile-verify" component={MobileVerify} />
          <Route path="/order-complite" component={ThankYou} />
          <Redirect to="/home" from="/" />
        </Switch>
      </main>
      <Footer />
    </div>
  );
}

export default App;
