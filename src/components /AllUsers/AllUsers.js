import React, {Component} from 'react';
import {UserServices} from "../../Services/UserServices";
import User from "../User/User";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom';
class AllUsers extends Component {

    state = {users: []}
    UserServices = new UserServices();

   async componentDidMount() {
       let users = await this.UserServices.getAllUsers();
       this.setState({users});
    }

    render() {
       let {users} = this.state;
        return (
            <div>
                {users.map(value => <User item={value} key={value.id}/>)}
                <div className={'line'}>
                    <Switch>
                        <Route path={'/users/:id'} render={(props) => {
                            return ' qwerty';

                        }}/>

                    </Switch>

                </div>

            </div>
        );
    }
}

export default AllUsers;