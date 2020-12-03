import React, {Component} from 'react';

class PostComp extends Component {


    render() {

        let {item, selectThisPost} = this.props;
        return (
            <div>
                {item.userId}-{item.title}-{item.title}
                <button onClick={() => selectThisPost(item.id)}>choose me</button>
            </div>

        );
    }
}

export default PostComp;