import React, { Component } from 'react'
import {connect} from 'react-redux'
import {login}  from '../Actions/action'
import {Redirect} from 'react-router-dom'


class Login extends Component {
    state = {
        email: '',
        password: '',
        error: null
    }
    handleOnchange = e => this.setState({ [e.target.name]: e.target.value });
    handleSubmit = e => {
        this.setState({ error: null });
        e.preventDefault();
        if (this.state.email === '' && this.state.password === '') {
            this.setState({ error: "Please fill email and password" });
        } else {
            this.props.login(this.state.email, this.state.password)
        }
    }
    render() {
        const { error } = this.state;
        let pageRedirect;
        if (this.props.redirect) {
            pageRedirect = <Redirect to='/employeeDetails' />
        }
        return (
            <div className="container">
                {pageRedirect}
                <div className="col-lg-5 mx-auto mt-5">
                    <div className="card card-body shadow-sm">
                        <h4 className="text-center">Login</h4>
                        <form onSubmit={this.handleSubmit}>
                            <div className="form-group">
                                <input onChange={this.handleOnchange} name='email' type="email" placeholder="Email" className="form-control" />
                            </div>
                            <div className="form-group">
                                <input onChange={this.handleOnchange} name="password" type="password" placeholder="Password" className="form-control" />
                            </div>
                            <button type="submit" className="btn btn-sm btn-primary">Login</button>
                            {
                                (error !== null || this.props.errors !== null) && (
                                    <div className="alert alert-danger mt-2">
                                        <p className="m-0">{error} {this.props.errors} </p>
                                    </div>
                                )
                            }
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state)=>({
    auth:state.auth.auth,
    redirect: state.auth.redirect,
    errors: state.auth.error

})
const mapDispatchToProps = (dispatch)=>({
    login:(email,password)=>dispatch(login(email,password))
})

export default  connect(mapStateToProps,mapDispatchToProps) (Login)
