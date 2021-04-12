import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import Nav from "./components/Nav";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import ViewDates from "./pages/ViewDates";
import EnterDates from "./pages/EnterDates";
import CalendarAvailability from "./pages/CalendarAvailability";
import 'react-big-calendar/lib/css/react-big-calendar.css';
import "react-datepicker/dist/react-datepicker.css";

//import { Calendar, momentLocalizer } from 'react-big-calendar';
//import moment from 'moment';



function App() {
  return (
    <Router>
      <div>
        <div className="row">
          <div className="col-md-6">

          </div>
          <div className="col-md-1">

          </div>
          <div className="col-md-5">
            <Nav />
            <Switch>
              <Route exact path={["/", "/Login"]}>
                <Login />
              </Route>

              <Route exact path={["/Signup"]}>
                <SignUp />
              </Route>



            </Switch>
          </div>
        </div>

        <div className="row">
          <div className="col-12">
            <Route exact path={["/ViewDates"]}>
              <ViewDates />
            </Route>

            <Route exact path={["/EnterDates"]}>
              <EnterDates />
            </Route>

            <Route exact path={["/CalendarAvailability"]}>
              <CalendarAvailability />
            </Route>
          </div>
        </div>
      </div>
    </Router>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
