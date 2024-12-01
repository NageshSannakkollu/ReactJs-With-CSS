
import { Component } from 'react'

import "./index.css"

class LoginPage extends Component {
    state={username:"",password:'',showErrorMessage:false,errorMessage:[],showHidePassword:false}
    
    changeInUsername  = event => {
        this.setState({username:event.target.value})
    }

     changeInPassword  = event => {
        this.setState({password:event.target.value})
    }

    clickOnCheckbox = () => {
        this.setState(prevState => ({showHidePassword:!prevState.showHidePassword}))
    }

    loginSuccess = () => {
         const {history} = this.props
         history.replace("/")
    }

    loginHandler = async(event) => {
        event.preventDefault()
        console.log("Login Clicked")
    }
    render(){
        const {username,password,showHidePassword,showErrorMessage,errorMessage} = this.state
        const passwordClass = showHidePassword ?'text':'password'
        return (
            <>
                <div className='main-login-container'>
                    <div className='inside-login-container'>  
                        <h2>Login Form</h2>
                        <form onSubmit={this.loginHandler} className='form-container'>
                            <label className='label'>Username :</label>
                            <br/>
                            <input type='text' placeholder='username' value={username} className='input-form' onChange={this.changeInUsername} required/>
                            <br/><br/>
                            <label className='label'>Password :</label>
                            <br/>
                            <input type={`${passwordClass}`} placeholder='password' value={password} className='input-form' onChange={this.changeInPassword} required/>
                            <br/><br/>
                            <div className='show-password-container'>
                                <label htmlFor='showPassword' className='label'>Show Password</label>
                                <input type='checkbox' id="showPassword" onClick={this.clickOnCheckbox} className='checkbox'/>
                            </div>
                            <br/>
                            <div className='login-button-container'>
                                <button type='submit' className='login-button'>Login</button>
                            </div>
                            {showErrorMessage && <p className='error-message'>*{errorMessage}</p>}
                        </form>
                    </div>
                </div>
            </>
        )
    }
}
  

export default LoginPage