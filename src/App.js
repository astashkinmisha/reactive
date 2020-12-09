import React, {Component} from 'react';
import AllUsers from "./components /AllUsers/AllUsers";
import AllPosts from "./components /AllPosts/AllPosts";
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
                    <div>
                        <Link to={'/users'}>
                            users
                        </Link>
                    </div>

                    <div>
                        <Link to={'/posts'}>
                            posts
                        </Link>
                    </div>

                    <hr/>
                    <Switch>
                        <Route path={'/users'} render={() => {
                            return <AllUsers/>;
                        }}/>
                        <Route path={'/posts'} component={AllPosts}/>
                        return <AllPosts/>

                    </Switch>
                    <hr/>


                </div>
            </Router>
        );
    }
}

export default App;