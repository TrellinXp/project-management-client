
import React, { Component } from 'react';
import authService from '../../services/auth/auth-service';
import { Link, Redirect } from 'react-router-dom';
 
class Login extends Component {
  state = { username: '', password: '' };
 
  handleFormSubmit = event => {
    event.preventDefault();
    const { username, password } = this.state;
 
    authService
      .login(username, password)
      .then(response => {
        this.setState({ username: '', password: '' });
        this.props.getUser(response, true);
        
        this.props.history.push("/projects");
      })
      .catch(error => console.log(error));

  };
 
  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };
 
  render() {
    return (
      <div>
        <form onSubmit={this.handleFormSubmit} className="signup">
          <label>
                        Username:
                        <input
                            type="text"
                            name="username"
                            value={this.state.username}
                            onChange={this.handleChange}
                        />
                    </label>

                    <label>
                        Password:
                        <input
                            type="password"
                            name="password"
                            value={this.state.password}
                            onChange={this.handleChange}
                        />
                    </label>
 
          <button type="submit" class="signup-btn"> Login </button>
        </form>
 
        <p>
          Don't have account?
          <Link to={'/signup'}> Signup</Link>
        </p>
      </div>
    );
  }
}
 
export default Login;