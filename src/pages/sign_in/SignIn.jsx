import React, {Component, Fragment} from "react";
import {Link} from "react-router-dom";

class SignIn extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
            rememberMe: false,
            error: ''
        }
    }


    handleChange = (e) => {
        const {name, type, checked, value} = e.target;
        const value_ = type === 'checkbox' ? checked : value;
        this.setState({[name]: value_});

        console.log(this.state);
    };

    handleFormSubmit = () => {
        const {email, password, rememberMe} = this.state;
        localStorage.setItem('rememberMe', rememberMe);

        if (email !== localStorage.getItem('email') || password !== localStorage.getItem('password')) {
            this.setState({error: 'INVALID DATA'});
        }

        // localStorage.setItem('rememberMe', rememberMe);
        // localStorage.setItem('email', rememberMe ? email : '');
        // localStorage.setItem('password', rememberMe ? password : '');
    };

    componentDidMount() {
        const rememberMe = localStorage.getItem('rememberMe') === 'true';
        const email = rememberMe ? localStorage.getItem('email') : '';
        const password = rememberMe ? localStorage.getItem('password') : '';
        this.setState({email, password, rememberMe});
    }

    render() {
        return (
            <Fragment>
                <h1>Sign In</h1>
                <form onSubmit={this.handleFormSubmit} noValidate>
                    <div className="email">
                        <input
                            className=''
                            name='email'
                            type='email'
                            placeholder='Email *'
                            value={this.state.email}
                            onChange={this.handleChange}
                        />
                    </div>
                    <div className="password">
                        <input
                            className=''
                            name='password'
                            type='password'
                            placeholder='Password *'
                            value={this.state.password}
                            onChange={this.handleChange}
                        />
                    </div>
                    <div className="form_checkbox_block">
                        <input type="checkbox"
                               name="rememberMe"
                               checked={this.state.rememberMe}
                               onChange={this.handleChange}
                               id="custom-checkbox"
                               className="form_checkbox"/>
                        <label htmlFor="custom-checkbox">Remember me</label>
                    </div>
                    <div className="submission_btn">
                        <button type='submit'>Sign In</button>
                        {this.state.error.length > 0 && (<span>{this.state.error}</span>)}

                    </div>
                    <div className="form_links">
                        <Link to="/sign_up/">
                            <p>Forgot password?</p>
                        </Link>
                        <Link to="/sign_up/sign_up">
                            <p>Don't have an account? Sing Up</p>
                        </Link>
                    </div>
                </form>
            </Fragment>
        )
    }
}

export default SignIn;

