import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import HomePage from './pages/HomePage';
import Header from './pages/Header';
import Footer from './pages/Footer';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/" component={HomePage} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
