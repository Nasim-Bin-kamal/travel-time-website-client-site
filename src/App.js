import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import About from './pages/About/About';
import AddPackage from './pages/AddPackage/AddPackage';
import Home from './pages/Home/Home';
import ManagePackages from './pages/ManagePackages/ManagePackages';
import MyPackages from './pages/MyPackages/MyPackages';
import NotFound from './pages/NotFound/NotFound';
import RegisterLogin from './pages/RegisterLogin/RegisterLogin';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/home">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route exact path="/add/package">
            <AddPackage />
          </Route>
          <Route path="/manage">
            <ManagePackages />
          </Route>
          <Route path="/myPackages">
            <MyPackages />
          </Route>
          <Route path="/registerLogin">
            <RegisterLogin />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
