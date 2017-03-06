import React, { Component } from 'react';

import './Login.css';

class Login extends Component {

    constructor() {
        super();
        this.state = {
            email: '',
            password: ''
        };
        this._emailChange = this._emailChange.bind(this);
        this._passwordChange = this._passwordChange.bind(this);
        this._handleClick = this._handleClick.bind(this);
    }

    _emailChange(event) {
        event.preventDefault();
        this.setState({email: event.target.value});
    }

    _passwordChange(event) {
        event.preventDefault();
        this.setState({password: event.target.value});
    }

    _handleClick(event) {
        event.preventDefault();
        this.props.onClick(this.state);
    }

    render() {

        const error = (() => {
            return this.props.error ?
                    <div className="alert alert-danger" role="alert">{this.props.error}</div> :
                    "";
        })()

        return (
            <div>
                <h2 className="display-3 text-center">{this.props.heading}</h2>
                <hr className="my-4" />
                <div className="login">
                    <form className="form-signin">
                        {error}
                        <label htmlFor="inputEmail" className="sr-only">Email address</label>
                        <input onChange={this._emailChange} type="email" id="inputEmail" className="form-control" placeholder="Email address" required autoFocus />
                        <label htmlFor="inputPassword" className="sr-only">Password</label>
                        <input onChange={this._passwordChange} type="password" id="inputPassword" className="form-control" placeholder="Password" required />
                        <br />
                        <button onClick={this._handleClick} className="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
                    </form>
                </div>
            </div>
        )
    }

}

export default Login;
