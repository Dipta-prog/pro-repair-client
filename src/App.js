import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
// import Home from './components/Home/Home/HomeN';
// import Header from './components/Navbar/Navbar';
import NoMatch from './components/NoMatch/NoMatch';
import Login from './components/Login/Login';
import { createContext } from 'react';
import { useState } from 'react';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Book from './components/DashBoard/DashBoard';
import Admin from './components/Admin/Admin';
import Orders from './components/Orders/Orders';
import Home from './components/Home/Home/Home';
import DashBoard from './components/DashBoard/DashBoard';
export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({
    isSignedIn: false,
    name: '',
    email: '',
    password: '',
    photo: '',
    error: '',
    success: false
  });

  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        {/* <Header name={loggedInUser.name} ></Header> */}
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <PrivateRoute path="/dashboard/:id">
            <DashBoard></DashBoard>
          </PrivateRoute>
          <PrivateRoute path="/dashboard">
            <DashBoard></DashBoard>
          </PrivateRoute>
          {/* <PrivateRoute path="/orders">
            <Orders></Orders>
          </PrivateRoute> */}
          <PrivateRoute path="/admin">
            <Admin></Admin>
          </PrivateRoute>
          <Route path="*">
            <NoMatch />
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
