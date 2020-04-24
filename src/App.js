import React from 'react';
import NavBar from './components/navbar';
import Footer from './components/footer';
import Home from './pages/home';
import Portfolio from './pages/portfolio';
import BlogSingle from './pages/single';
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
        <Route path='/blog-details'>
          <BlogSingle />
        </Route>
        <Route component={Error404} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
