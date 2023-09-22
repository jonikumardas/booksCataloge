import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/home';
import Notfound from './pages/Notfound';
import LogInpage from './pages/logInpage';
import BooksDetails from './components/ui/BooksDetails';
import CheckOut from './pages/CheckOut';
import Navber from './layout/navber';
import SignUp from './pages/signUp';
import Books from './pages/Books';
function App() {
  return (
    <Router>
      <Navber></Navber>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/books" component={Books} />
        <Route path="/bookDetails/:id" component={BooksDetails} />
        <Route path="/check-out" component={CheckOut} />
        <Route path="/log-in" component={LogInpage} />
        <Route path="/sign-up" component={SignUp} />
        <Route path="*" component={Notfound} />
      </Switch>
    </Router>
  );
}

export default App;