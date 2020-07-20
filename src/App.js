import React from 'react';
import NavBar from './components/navbar';
import Footer from './components/footer';
import Home from './pages/home';
import Portfolio from './pages/portfolio';
import PortfolioSingle from './pages/single';
import PortfolioSingle2 from './pages/single2';
import PortfolioSingle3 from './pages/single3';
import Error404 from './pages/404';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/portfolio'>
          <Portfolio />
        </Route>
        <Route path='/single'>
          <PortfolioSingle />
        </Route>
        <Route path='/single2'>
          <PortfolioSingle2 />
        </Route>
        <Route path='/single3'>
          <PortfolioSingle3 />
        </Route>
        <Route component={Error404} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
