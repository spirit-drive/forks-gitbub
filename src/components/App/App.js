import React from "react";
import {Link, Route, Switch} from 'react-router-dom';
import SearchPage from '../SearchPage/SearchPage';
const Home = () => <p>Home page</p>;


const App = () => (
    <div>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/search">Search</Link></li>
        </ul>

        <hr />

        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/search" component={SearchPage} />
        </Switch>

    </div>
);

export default App;