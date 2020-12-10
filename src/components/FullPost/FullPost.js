import React, {Component} from 'react';
import PostServices from "../../services/PostServices";

class FullPost extends Component {

    state ={post: null};
    postServices = new PostServices();

    async componentDidMount() {
        let {match : {params: {id}}} = this.props;
        let post = await  this.postServices.post(id);
        this.setState({post});

    }


    render() {
            let {post} = this.state;
        return (
            <div>
                {post && <div>{post.id} - {post.title} - {post.body}</div>}
            </div>
        );
    }
}

export default FullPost;