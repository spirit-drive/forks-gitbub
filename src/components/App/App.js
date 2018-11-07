import React from "react";
import {Link, Route, Switch} from 'react-router-dom';
import ResultSearch from '../ResultSearch/ResultSearch';
const Home = () => <p>Home page</p>;
const Search = () => <p>Search page</p>;


const App = () => (
    <div>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/search">Search</Link></li>
        </ul>

        <hr />

        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/search" component={ResultSearch} />
        </Switch>

    </div>
);

export default App;