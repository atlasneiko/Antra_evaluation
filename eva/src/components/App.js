import { Switch, Route } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';
function App() {
  return (
    <div className="App">
      <Header></Header>
      <Switch>
        <Route exact path='/contact' component={Contact} />

        <Route exact path="/portfolio" component={Portfolio} />
        <Route path="/" component={Home} />

      </Switch>
      <Footer></Footer>
    </div>
  );
}

export default App;
