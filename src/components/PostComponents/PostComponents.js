import React, {Component} from 'react';
import PostComp from "./PostComp";

class PostComponents extends Component {

   state = {posts:[], postChoose: null}

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(value => value.json())
            .then(PostsJsonPlaceholder => {
            this.setState({posts: PostsJsonPlaceholder})
            })
    }

    selectThisPost = (id) => {
       let postChoose = this.state.posts.find(value => value.id === id);
       this.setState({postChoose});
    }

    render() {

      let {posts, postChoose} = this.state;

        return (
            <div>
                {
                    posts.map(value => (
                        <PostComp item={value} key ={value.body} selectThisPost = {this.selectThisPost}/>))
                }
                <hr/>
                    {
                    postChoose && <PostComp item={postChoose}/>
                    }

                </div>
        );
    }
}

export default PostComponents;