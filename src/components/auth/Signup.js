import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import authService from '../../services/auth/auth-service';

class Signup extends Component {

    state = { username: '', password: '' }

    handleFormSubmit = (event) => {
        event.preventDefault();
        const { username, password } = this.state;

        authService.signup(username, password)
            .then(createdUser => {
                this.setState({
                    username: "",
                    password: "",
                });
                this.props.getUser(createdUser, true);
            })
            .catch(error => console.log(error))
    }

    handleChange = (event) => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleFormSubmit} className="signup">
                    <div>
                        <label class="signup-label">
                            Username:
                        </label>
                        <input
                            type="text"
                            name="username"
                            className="input"
                            value={this.state.username}
                            onChange={this.handleChange}
                        />
                    </div>
                    <div>
                        <label class="signup-label">
                            Password:
                        </label>
                        <input
                            type="password"
                            name="password"
                            className="input"
                            value={this.state.password}
                            onChange={this.handleChange}
                        />
                    </div>

                    <button type="submit" class="signup-btn"> Signup </button>
                </form>

                <p>
                    Already have an account?
                    <Link to={"/"}> Login</Link>
                </p>

            </div>
        )
    }
    
}

export default Signup;