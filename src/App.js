import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import SocialHeader from './pages/SocialHeader';
import HomePage from './pages/HomePage';
import Header from './pages/Header';
import Footer from './pages/Footer';
import ProductList from './components/ProductList';
import Product from './components/Product';
import Offers from './pages/Offers';
import PageNotFound from './pages/PageNotFound';

function App() {
  return (
    <div className="App">
      <Router>
        <Offers />
        <SocialHeader />
        <Header />
        <Switch>
          <Route path="/" component={HomePage} exact />
          <Route path="/product-list" component={ProductList} />
          <Route path="/product" component={Product} />
          <Route component={PageNotFound} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
