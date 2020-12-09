import React, {Component} from 'react';
import {Link, withRouter} from "react-router-dom";

class Post extends Component {

    render() {

        let {match: {url}, item} = this.props;
        return (
            <div>
                {item.id} - {item.name} - <Link to={`${url}/${item.body}`}>info</Link>
            </div>
        );
    }
}
export default withRouter(Post);
//export default Post;