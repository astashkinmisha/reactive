import React, {Component} from 'react';
import PostComponents from "./components/PostComponents/PostComponents";
import PostComp from "./components/PostComponents/PostComp";

class App extends Component {

    render() {
        return (
            <div>
<PostComponents/>
<PostComp/>
            </div>
        );
    }
}

export default App;