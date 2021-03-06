import React from "react";
import { Link } from "react-router-3";
import { Accounts } from "meteor/accounts-base";

export default class Signup extends React.Component {
    constructor(props){
      super(props);
      this.state = {
        error: ''
      };
    }

    onSubmit(e){
      e.preventDefault();
      let email = this.refs.email.value.trim();
      let password = this.refs.password.value.trim();
      
      if ( password.lenght < 3) {
        return this.setState({error: "Password must be more than 3 chars long"});
      }

      Accounts.createUser({email, password}, (err) => {
        if (err) {
          this.setState({error: err.reason});
        } else {
          this.setState({error: ""});
        }
      });
    }


    render() {
      return (
        <div className="boxed-view">
          <div className="boxed-view__box">
              <h1>Signup</h1>
              <p>{this.state.error}</p>
              <form onSubmit={this.onSubmit.bind(this)} noValidate className="boxed-view__form">
                <input type="email" ref="email" name="email" placeholder="email"/>
                <input type="password" ref="password" name="password" placeholder="password"/>
                <button className="button">Create Account</button>
              </form>

              <Link to="/">Already have an a account?</Link>
          </div>
        </div>
      )
    }
  }

