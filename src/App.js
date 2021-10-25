
import './App.css';
import Home from './pages/Home/Home/Home';
import {BrowserRouter as Router, Switch ,Route} from 'react-router-dom';
import Notfound from './pages/Notfound/Notfound';
import Booking from './pages/Booking/Booking/Booking';
import Login from './pages/Login/Login/Login';
import Header from './pages/Shared/Header/Header';
import AuthProvider from './Contexts/AuthProvider';
import PrivateRoute from './pages/Login/Login/PrivateRoute/PrivateRoute';
import Footer from './pages/Shared/Footer/Footer';


function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>
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
            <PrivateRoute path="/booking/:serviceId">
              <Booking></Booking>
            </PrivateRoute>
            <Route path="*">
              <Notfound></Notfound>
            </Route>

          </Switch>
         <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
