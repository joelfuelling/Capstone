//! Because this one is a class, it has to import the parent class first - 
import { Component } from 'react';
 // Data flow (FOR DEMO example) - SignUpForm.jsx <--> users-service.js <--> users-api.js <-Internet-> server.js (Express)
 import { signUp } from '../../utilities/users-service';

export default class SignUpForm extends Component {
    //? constructor(){
    //? This is the old way to customize state.
    //? }    
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
handleSubmit = async (e) => {
    e.preventDefault() 
    try {
        //! 1st - TEST your CATCH with a staged error - 'throw new Error("BROKE!")'
        //! 2nd - You don't need another try/catch in the 'users-service.js' because this one will handle it.
        // We don't want to send the 'error' or 'confirm' property, so let's make a copy of the state object, then delete them
        const formData = {...this.state}
        // Create a new object with the spread operator
        delete formData.error
        // Delete the error out of state (defined above)
        delete formData.confirm
        // Delete the confirm out of state (defined above)
        const user = await signUp(formData)
        // The promise returned by the signUp service method will resolve to the user object included in the payload of the JSON Web Token (JWT)
        this.props.setUser(user)
        //! ABOVE, 'this.props' is super untuitive, and is..
        //! step 1 how you LIFT STATE.
        //! Ordinarily we would need to destructure props passed to function components. However, class components like <SignUpForm> access their props as this.props.<name of the prop> so there's no destructuring or anything else necessary.
    } catch {
        //An error occured (above in state is 'error' that starts as empty but shows something if there is an error. Also, look at the <p> in the Sing up Form - Make it a 'closable notation'
        this.setState({error: 'Sign up Failed - Try Again'})
    }
}

render(){
//! render is used BEFORE the return.
//! all items (below) within render get wrapped in {}   
    const disable = this.state.password !== this.state.confirm
    // Disables the form if the passwords dont match 
        // ? How? See button: disabled={disable}
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