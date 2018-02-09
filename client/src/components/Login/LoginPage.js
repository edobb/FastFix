import React from 'react';
import {LoginForm} from './LoginForm';
import { Container, Row, Col } from "./../Grid";

class LoginPage extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    
    }
    
    handleChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        this.setState({
            [name]: value
          });          
    
    }
    
    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.username + " " + this.state.password);
        this.setState({
            username: '',
            password: ''
        });
        event.preventDefault();
    }
    
    
    handleSignup(event) {
        alert('Hello');
        event.preventDefault();
    }
    render() {
        return (
            <Row className="row">
                <Col className={['col-xs-6', 'col-centered', 'col-xs-offset-3'].join(" ")}>

                    <LoginForm
                    handleChange={this.handleChange}
                    handleSignup={this.handleSignup}
                    handleSubmit={this.handleSubmit}
                    username={this.state.username}
                    password={this.state.password}
                    />
                </Col>
            </Row>
        )    
    }
}


export {LoginPage};