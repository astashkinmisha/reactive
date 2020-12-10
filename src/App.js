import React, {Component} from 'react';
import AllPosts from "./components/AllPosts/AllPosts";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";


class App extends Component {
    render() {
        return (
            <Router>
            <div>
                <ul>
                    <li>
                    <Link to={'/posts'}>to all posts</Link>
                    </li>
                </ul>
                <hr/>

                <Switch>



                    <Route path={'/posts'} render={()=> <AllPosts/>}/>


                </Switch>
                <hr/>

            </div>

            </Router>
        );
    }
}

export default App;