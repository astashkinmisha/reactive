import React, {Component} from 'react';
import UserSearch from "./components/UserSearch";

class App extends Component {

    state = {controlNumber: '', chosenNumber: null,  maxInputValue: 10}

    numberForm = React.createRef();
    //форма, реф і чузнамбер шоб побачити карент велью
    //інпут з типом (намбер), мінімальним значенням і максимальним, подія на введення (зберегти число)
    render() {
        return (
            <div>
                <h3>choose you user id</h3>

                <form ref={this.numberForm} onSubmit={this.chooseNum}>

                    <input type="number" min={1} max={this.state.maxInputValue} onInput={this.SaveNum}
                           value={this.state.controlNumber}/>
                            <button>search</button>
                </form>

                <UserSearch number={this.state.chosenNumber}/>
            </div>
        );
    }
//save number of input
    SaveNum =(e) => {
        this.setState({controlNumber: e.target.value});
    }
//number you chose will show in console value of current input
    chooseNum = (e) => {
        e.preventDefault();
        console.log(this.numberForm.current[0].value);
        this.setState({chosenNumber: this.numberForm.current[0].value})
    }


}



export default App;