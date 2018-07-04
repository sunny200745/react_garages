import React, { Component } from 'react';
import * as service from '../../common_services/service';

export default class Login extends Component {
    loginClicked = () => {
        this.props.history.push("dashboard");
    }
    render() {
        
        return (
            <div className="container">
                <section id="content">
                    <form action="">
                        <h1>Login Form</h1>
                        <div>
                            <input type="text" placeholder="Username" required="" id="username" />
                        </div>
                        <div>
                            <input type="password" placeholder="Password" required="" id="password" />
                        </div>
                        <div>
                            <input type="submit" value="Log in" onClick={this.loginClicked}/>
                        </div>
                    </form>
                    
                </section>
            </div>

        )
    }
}