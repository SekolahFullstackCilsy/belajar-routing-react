import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route, NavLink, Link, Redirect } from 'react-router-dom'
import Todos from './components/Todos'
import Dashboard from './components/Dashboard'
import NotFound from './components/NotFound'
import About from './components/About'
import TodoDetail from './components/TodoDetail'
  
function App() {
  return (
    <Router>
      <div className="App">
        <ul>
          <li>
            <NavLink
              to="/"
              // activeClassName="active"
              activeStyle={{
                color: 'yellow',
                textDecoration: 'underline'
              }}
            >
              Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink to="/todos">Todos</NavLink>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
        <Switch>
          <Route path="/" exact component={Dashboard} />
          <Route path="/todos" exact component={Todos} />
          <Route path="/todos/:id/:name" component={TodoDetail} />
          <Route path="/about" component={About} />
          <Redirect from="/contact" to="/about" />
          <Route component={NotFound} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
