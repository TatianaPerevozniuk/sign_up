import React, {Component, Fragment} from "react";
import {Link} from "react-router-dom";

const emailRegex = RegExp(
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/);

const formValid = ({formErrors, ...rest}) => {
    let valid = true;

    //Validate form errors being empty
    Object.values(formErrors).forEach(val => {
        val.length > 0 && (valid = false);
    });

    //Validate the form was filled out
    Object.values(rest).forEach(val => {
        val === null && (valid = false)
    });

    return valid;
}

class SignUp extends Component{
    constructor(props) {
        super(props);

        this.state = {
            firstName: null,
            lastName: null,
            email: null,
            password: null,
            formErrors: {
                firstName: "",
                lastName: "",
                email: "",
                password: ""
            },
            checked: false,
        }
    }

    handleSubmit = e => {
        e.preventDefault();

        if (formValid(this.state)) {
            console.log(`
            --Submitting--
            First Name: ${this.state.firstName}
            Last Name: ${this.state.lastName}
            Email: ${this.state.email}
            Password: ${this.state.password}
            Checked: ${this.state.checked}`)
        } else {
            console.log('Form invalid - display error message')
        }
    }

    handleChange = e => {
        e.preventDefault();

        const { name, value, type,checked } = e.target;
        let formErrors = this.state.formErrors;

        switch (name) {
            case 'firstName':
                formErrors.firstName =
                    value.length < 3
                        ? 'minimum 3 characters required'
                        : '';
                break;
            case 'lastName':
                formErrors.lastName =
                    value.length < 3
                        ? 'minimum 3 characters required'
                        : '';
                break;
            case 'email':
                formErrors.email =
                    emailRegex.test(value)
                        ? ''
                        : 'invalid email address';
                break;
            case 'password':
                formErrors.password =
                    value.length < 8
                        ? 'minimum 8 characters required'
                        : '';
                break;
            default:
                break;
        }

        const value_ = type === 'checkbox' ? checked : value;

        this.setState({formErrors, [name]: value_}, () => console.log(this.state));
        localStorage.setItem(name, value_);
    }


    render() {
        const { formErrors } = this.state;

        return (
            <Fragment>
                <h1>Sign Up</h1>
                <form onSubmit={this.handleSubmit} noValidate>
                    <div className="firstName">
                        <input
                            className={formErrors.firstName.length > 0 ? "error" : null}
                            name='firstName'
                            type='text'
                            placeholder='First Name *'
                            onChange={this.handleChange}
                        />
                        {formErrors.firstName.length > 0 && (
                            <span className="errorMessage">{formErrors.firstName}</span>
                        )}
                    </div>
                    <div className="lastName">
                        <input
                            className={formErrors.lastName.length > 0 ? "error" : null}
                            name='lastName'
                            type='text'
                            placeholder='Last Name *'
                            onChange={this.handleChange}
                        />
                        {formErrors.lastName.length > 0 && (
                            <span className="errorMessage">{formErrors.lastName}</span>
                        )}
                    </div>
                    <div className="email">
                        <input
                            className={formErrors.email.length > 0 ? "error" : null}
                            name='email'
                            type='email'
                            placeholder='Email *'
                            onChange={this.handleChange}
                        />
                        {formErrors.email.length > 0 && (
                            <span className="errorMessage">{formErrors.email}</span>
                        )}
                    </div>
                    <div className="password">
                        <input
                            className={formErrors.password.length > 0 ? "error" : null}
                            name='password'
                            type='password'
                            placeholder='Password *'
                            onChange={this.handleChange}
                        />
                        {formErrors.password.length > 0 && (
                            <span className="errorMessage">{formErrors.password}</span>
                        )}
                    </div>
                    <div className="form_checkbox_block">
                        <input type="checkbox"
                               name='checked'
                               checked={this.state.checked}
                               onChange={this.handleChange}
                               id="custom-checkbox"
                               className="form_checkbox" />
                        <label htmlFor="custom-checkbox">I want to receive inspiration, markting promotions and updates
                            via email</label>
                    </div>
                    <div className="submission_btn">
                        <button type='submit'>Sign Up</button>
                    </div>
                    <div className = "form_links">
                        <Link to = "/sign_up/sign_in">
                            <p>Already have an account? Sing In</p>
                        </Link>
                    </div>
                </form>
            </Fragment>
        )
    }
}
export default SignUp;