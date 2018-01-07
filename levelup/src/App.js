import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import firebase, { auth, provider } from './firebase.js';


class App extends Component {
  constructor() {
    super();
    this.state = {
      user: null,
      signUpEmail: '',
      signUpPassword: '',
    }
    this.loginGoogle = this.loginGoogle.bind(this);
    this.loginEmail = this.loginEmail.bind(this);
    this.handleChangeSignUpPassword = this.handleChangeSignUpPassword.bind(this);
    this.handleChangeSignUpEmail = this.handleChangeSignUpEmail.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.logout = this.logout.bind(this);
  }
  componentDidMount() {
    auth.onAuthStateChanged((user) => {
      if (user) {
        this.setState({ user });
      }
    });
  }
  handleChangeSignUpEmail(event) {
    this.setState({
      signUpEmail: event.target.value
    })
  }
  handleChangeSignUpPassword(event) {
    this.setState({
      signUpPassword: event.target.value
    })
  }
  handleSubmit(event) {
    event.preventDefault();
    console.log('handleSubmit');
    auth.createUserWithEmailAndPassword(this.state.signUpEmail, this.state.signUpPassword)
      .catch((error) => {
        console.log(error.code);
      })
  }
  logout() {
    auth.signOut()
      .then(() => {
        this.setState({
          user: null
        });
      });
  }
  loginGoogle() {
    auth.signInWithPopup(provider)
      .then((result) => {
        const user = result.user;
        this.setState({
          user
        });
      });
  }
  loginEmail(email, password) {
    auth.signInWithEmailAndPassword(email, password)
      .catch((e) => {
        alert('Error');
      })
      .then((result) => {
        const user = result.user;
        this.setState({
          user
        });
      });
  }
  render() {
    return (
      <div className="App">
        {this.state.user ?
          <div>
            Successfully logged in.
            <button onClick={this.logout}>Log Out</button>
          </div>
        :
        <div>
        <button onClick={this.loginGoogle}>Log In with Google</button>
        <form onSubmit={this.handleSubmit}>
          <input value={this.state.signUpEmail} onChange={this.handleChangeSignUpEmail}/>
          <input value={this.state.signUpPassword} onChange={this.handleChangeSignUpPassword}/>
          <input value='Sign Up' type='submit'/>
        </form>
          </div>
        }
      </div>
    );
  }
}

export default App;
