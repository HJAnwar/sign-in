import React, { createContext, useState } from 'react';
import './App.css';
import Login from './component/Login/Login';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from './component/Login/Header/Header';
import PrivateRoute from './component/Login/PrivateRoute/PrivateRoute';
import Room from './component/Login/Room/Room';
import Notfound from './component/Login/Notfound/Notfound';
import Home from './component/Login/Home/Home';
import About from './component/Login/About/About';
import Footer from './component/Login/Footer/Footer';



export const UserContext= createContext();

function App() {
  const [loggedInUser, setLoggedInUser]=useState({});
  return (
    <div className='body'>
     
       <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
        <Router>
          <Header></Header>
        <Switch>
        <Route path='/home'>
            <Home></Home>
          </Route>
          <Route path='/about'>
            <About></About>
          </Route>
          <Route path='/login'>
            <Login></Login>
          </Route>
          <PrivateRoute path='/room'>
            <Room></Room>
          </PrivateRoute>
          <Route exact path='/'>
            <Home></Home>
          </Route>
          <Route path='*'>
            <Notfound></Notfound>
          </Route>
        </Switch>
        <Footer></Footer>
        </Router>
      </UserContext.Provider>
    </div>
  );
}

export default App;
