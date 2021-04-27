import React, {Component, Fragment} from "react";
import {Link} from "react-router-dom";

class SignIn extends Component{
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Fragment>
                <h1>Sign In</h1>
                <form onSubmit={this.handleSubmit} noValidate>
                    <div className="email">
                        <input
                            className=''
                            name='email'
                            type='email'
                            placeholder='Email *'
                            noValidate
                            onChange={this.handleChange}
                        />
                    </div>
                    <div className="password">
                        <input
                            className=''
                            name='password'
                            type='password'
                            placeholder='Password *'
                            noValidate
                            onChange={this.handleChange}
                        />
                    </div>
                    <div className="form_checkbox_block">
                        <input type="checkbox" id="custom-checkbox" className="form_checkbox"/>
                        <label htmlFor="custom-checkbox">Remember me</label>
                    </div>
                    <div className="submission_btn">
                        <button type='submit'>Sign In</button>
                    </div>
                    <div className = "form_links">
                        <Link to = "/sign_up/">
                            <p>Forgot password?</p>
                        </Link>
                        <Link to = "/sign_up/sign_up">
                            <p>Don't have an account? Sing Up</p>
                        </Link>
                    </div>
                </form>
            </Fragment>
        )
    }
}
export default SignIn;

