import React, {Component} from 'react';
import Post from "../Post/Post";
import {PostServices} from "../PostServices/PostServices";

class AllPosts extends Component {

    PostServices =  new PostServices();

  state  = {posts: [] , postChoose: null}

  onPostChoose = (id) => this.setState({postChoose: this.state.posts.find(value => value.id === id)});

    componentDidMount() {
    this.PostServices.getAllPosts().then(value => this.setState({posts: value}))
    }


    render() {
        let {posts, postChoose} = this.state;
        return (
            <div>
                {
                   posts.map(value => (
                       <Post item={value} key={value.id} onPostChoose = {this.onPostChoose}/>))
                }

                {postChoose &&  <h2>{postChoose.id} - {postChoose.title}</h2>}


            </div>
        );
    }
}

export default AllPosts;