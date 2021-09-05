import React from "react"
import ReactDOM from "react-dom"
import App from "./App"
import Navbar from "./Navbar"
import Customers from "./Customers"
import Login from "./Login"
import Rentals from "./Rentals"
import Test from "./Test"
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom"
import User from "./User"
import MainPage from "./MainPage"

ReactDOM.render(
    
    <Router>
      <Navbar />
      <Switch> 

        <Route path="/customers">
          <Customers />
        </Route>

        <Route path="/login">
          <Login />
        </Route>

        <Route path="/rentals">
          <Rentals />
        </Route>

        <Route path="/"> 
          <App />      
        </Route>

    </Switch>
  </Router>
,document.getElementById('root'));

// ReactDOM.render(<Test/>, document.getElementById('root'));

// ReactDOM.render(
  
//   <Router>

//     <Switch>

//       <Route path="/user/:id">
//         <User />
//       </Route>
//       <Route path="/">
//         <MainPage />
//       </Route>

//     </Switch>

//   </Router>
  
//   ,document.getElementById('root'));


