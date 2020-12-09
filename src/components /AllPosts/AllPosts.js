import React, {Component} from 'react';
import {PostServices} from "../../Services/PostServices";
import Post from "../Post/Post";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";


class AllPosts extends Component {
    state = {posts: []};
    PostServices = new PostServices;

    async componentDidMount() {
        let posts = await this.PostServices.getAllPosts();
        this.setState({posts});
    }

        render () {
                let {posts} = this.state
                return (
                    <div>
                        {posts.map(value => <Post key={value.id} item={value}/>)}
                        <Switch>
                            <Route path={'/posts/:id'} render={(props) => {
                                return ' qwerty';

                            }}/>

                        </Switch>
                    </div>
                );
            }
        }


export default AllPosts;