import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Selections from './pages/Selections';
import About from './pages/About';
import Contact from './pages/Contact';

import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';


function App() {
  return (
    <div className='app'>
      <Router>
        <Navbar/>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/selections' exact component={Selections} />
          <Route path='/about' exact component={About} />
          <Route path='/contact' exact component={Contact} />
        </Switch>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
