import Header from "./components/Header";
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
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/blog">
            <Blog />
          </Route>
          <Route exact path="/blog/:id" component={BlogContent} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
