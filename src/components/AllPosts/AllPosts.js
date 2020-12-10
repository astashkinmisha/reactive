import React, {Component, Fragment} from 'react';
import PostServices from "../../services/PostServices";
import Post from "../Post/Post";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    withRouter
} from "react-router-dom";
import FullPost from "../FullPost/FullPost";

class AllPosts extends Component {

    state = {posts: []};
    postServices = new PostServices();

   async componentDidMount() {
   let posts = await this.postServices.posts();
       this.setState({posts});
    }

    render() {
    let {posts} = this.state;
    let {match: {url}} = this.props;
        return (
            <div>
                {
                posts.map(value => <Post key={value.id} item={value}/>)
                    }

                <hr/>
                    <div>
                         <Switch>
                                <Route path={'/posts/:id'} render={(props)=> {
                                        let {match:{params:{id}}} = props;
                                                 return <FullPost {...props} key={id}/>

                                            }}/>

                         </Switch>
                    <hr/>
                </div>
             </div>
        );
    }
}
export default withRouter(AllPosts);