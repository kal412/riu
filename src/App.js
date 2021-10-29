import Header from './components/Header'
import Footer from './components/Footer'
import Blog from "./views/Blog";
import Home from "./views/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import BlogContent from "./views/BlogContent";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/blog" component={Blog} />
          <Route exact path="/blog/:id" component={BlogContent} />
        </Switch>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
