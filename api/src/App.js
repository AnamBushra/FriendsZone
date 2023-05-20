import Home from "./pages/home/Home"
import Profile from "./pages/profile/Profile";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import {
  BrowserRouter as Router,
  Routes,
  Route, Navigate
} from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";
function App() {
  const {user}= useContext(AuthContext)
  return  <Router>
    <Routes> 
      <Route exact path="/" element={user ? <Home/> : <Register/>}/>
      <Route exact path="/login" element={user ? <Navigate replace to="/" />:<Login/>}/>
      <Route exact path="/register" element={user ? <Navigate replace to="/"/>:<Register/>}/>
      <Route exact path="/profile/:username" element={<Profile/>}/>
      </Routes>

  </Router>
}

export default App;
/*function App() {
  const { user } = useContext(AuthContext);
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          {user ? <Home /> : <Register />}
        </Route>
        <Route path="/login">{user ? <Redirect to="/" /> : <Login />}</Route>
        <Route path="/register">
          {user ? <Redirect to="/" /> : <Register />}
        </Route>
        <Route path="/profile/:username">
          <Profile />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;*/
