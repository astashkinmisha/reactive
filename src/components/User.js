import React, {Component} from 'react';

class User extends Component {


    //destr number and elements to this.props
    //then we can use .find to find value.id(user.id) + number which we input to it.

    render() {
        let {number, elements} = this.props;
        let element = elements.find(value => value.id === + number);
        return (
            <div>
                {
                    element && <div>{element.id} - {element.name}</div>
                }
            </div>
        );
    }
}

export default User;