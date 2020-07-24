import React from "react";
import axiosWithAuth from '../utils/axiosWithAuth'

class Login extends React.Component {
  state = {
    credentials: {
      username: '',
      password: ''
    }
  }

  handleChanges = e => {
    this.setState({
      credentials: {
        ...this.state.credentials,
        [e.target.name]: e.target.value
      }
    })
  }
  // make a post request to retrieve a token from the api
  login = e => {
    e.preventDefault();
    axiosWithAuth()
    .post('/api/login', this.state.credentials)
      .then(res => {
        // console.log(res)
        window.localStorage.setItem('token', res.data.payload)
        this.props.history.push('/protected')
      })
      .catch(error => {
        console.log('There was an error logging in', error)
      })
  }
  // when you have handled the token, navigate to the BubblePage route
  render() {

    return (
      <>
        
        <form onSubmit={this.login}>
          <input
          type='text'
          name='username'
          value={this.state.credentials.username}
          onChange={this.handleChanges}
          placeholder='username'
          />
          <input
          type='password'
          name='password'
          value={this.state.credentials.password}
          onChange={this.handleChanges}
          placeholder='password'
          />
          <button>Log in</button>
        </form>

      </>
    );
  };
}
export default Login;
