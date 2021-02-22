import Home from './Home'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import BookDetails from './BookDetails'

function App() {
  return (
    <Router>
      <div className='content'>
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/works/:id'>
            <BookDetails />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
