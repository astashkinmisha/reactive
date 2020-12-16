import React, {Component} from 'react';
import SearchService from "./SearchService";
import User from "./User";

class UserSearch extends Component {
    //state with empty arr of users
    state = {users: []}
    //connecting services
    searchService = new SearchService();
//mount search service from SerachService, by number and ID
    componentDidMount() {
        let {number, id} = this.props;
            this.searchService.getElement(number, id)
             .then(users => this.setState({users}))
    }
// destructing users, number to state and props, number will be in User component as props
    render() {

        let {users} = this.state;
        let {number} = this.props;
        return (
            <div>
                {number && <User number={number} elements={users}/>}
            </div>
        );
    }
}

export default UserSearch;