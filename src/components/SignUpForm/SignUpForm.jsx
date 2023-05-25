//! Because this one is a class, it has to import the parent class first - //? import { Component } from 'react';

import { Component } from 'react';


export default class SignUpForm extends Component {
// render is used BEFORE the return, which gets wrapped in {}
// Because we cannot use hooks in a class function, state = {} instead.
    state = {
        name: '',
        email: '',
        password: '',
        confirm: '',
        error: ''
      };

    handleChange = (e) => {
        // This allows our text to show up in the input fields below a were typing.
        this.setState({
            [e.target.name]: e.target.value, error: ''
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        alert(JSON.stringify(this.state))
    }

    render(){
        // Disables the form if the passwords dont match 
            // ? How? See button: disabled={disable}
        const disable = this.state.password !== this.state.confirm
        return (
            <div>
                <div className="form-container">
                    <form autoComplete="off" onSubmit={this.handleSubmit}>
                    <label>Name</label>
                    <input type="text" name="name" value={this.state.name} onChange={this.handleChange} required />
                    <label>Email</label>
                    <input type="email" name="email" value={this.state.email} onChange={this.handleChange} required />
                    <label>Password</label>
                    <input type="password" name="password" value={this.state.password} onChange={this.handleChange} required />
                    <label>Confirm</label>
                    <input type="password" name="confirm" value={this.state.confirm} onChange={this.handleChange} required />
                    <button type="submit" disabled={disable}>SIGN UP</button>
                    </form>
                </div>
            <p className="error-message">&nbsp;{this.state.error}</p>
            </div>
        )
    }
}