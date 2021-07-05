import './App.css';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import UserList from './UserList';
import UserDetails from './UserDetails';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/details/:id">
            <UserDetails />
          </Route>
          <Route path="/">
            <div className="list">
              <div className="row">
                <h2>
                  ID
                </h2>
                <h2 >
                  Avatar
                </h2>
                <h2 className='email'>
                  Email
                </h2>
                <h2>
                  First name
                </h2>
                <h2>
                  Last name
                </h2>
              </div>
              <hr></hr>
              <UserList />
            </div>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;