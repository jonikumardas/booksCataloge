import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/home';
import Notfound from './pages/Notfound';
import LogInpage from './pages/logInpage';
import BooksDetails from './components/ui/BooksDetails';
import AllBooks from './components/ui/AllBooks';
import Navber from './layout/navber';
import Fotter from './layout/fotter';
import CheckOur from './pages/CheckOur';
// import { Navbar } from 'react-daisyui';
function App() {
  return (
    
 
    <Router>
           <Navber></Navber>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/books" component={AllBooks} />
        <Route path="/bookDetails/:id" component={BooksDetails} />
        <Route path="/check-out" component={CheckOur} />
        <Route path="/login" component={LogInpage} />
        <Route path="/sign-up" component={LogInpage} />
        <Route path="*" component={Notfound} />
      </Switch>
      <Fotter></Fotter>
    </Router>
  );
}

export default App;