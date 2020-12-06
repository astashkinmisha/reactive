import React, {Component} from 'react';

class Post extends Component {
    render() {

       let {item, onPostChoose} = this.props;

        return (
            <div>
                {item.id} - {item.title} - <button onClick={()=>{onPostChoose(item.id)}}>choose me</button>

            </div>
        );
    }
}

export default Post;