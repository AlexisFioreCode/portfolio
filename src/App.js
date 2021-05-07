import './App.css';
import Header from './components/layout/Header';
import Nav from './components/layout/Nav';
import Footer from './components/layout/Footer';
import Projets from './components/projets/Projets';
import Bio from './components/biography/Biography';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div>
      <Header />
      <Router>
      <Nav />
      <main>
        <Switch>
          <Route path="/projets">
          <Projets/>
          </Route>
          <Route path="/bio">
            <Bio/>
          </Route>
          <Route path="/">
            <Projets />
          </Route>
        </Switch>
      </main>
      </Router>
      <Footer />   
    </div>
  );
}

export default App;
