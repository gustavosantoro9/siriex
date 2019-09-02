import React, { Component } from 'react';
import './pages.css'
import api from '../services/api';

class Login extends Component {
    
    state = {
        email: '',
        password: ''
    };

    handleSubmit = async e => {
        e.preventDefault();

        const data = new FormData();
        data.append('email', this.state.email);
        data.append('password', this.state.password);

        console.log(data.email);
        console.log(data);
        console.log(this.state.email);
        console.log(this.state.password);
        
        await api.post('login', data);

        //this.props.history.push('/home');
    }

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    }

    render(){
        return (
            <div id="app">
                <form onSubmit={this.handleSubmit}>                
                    <input type="text" placeholder="Email" name="email" 
                        onChange={this.handleChange} value={this.state.email} required />
                    <input type="password" placeholder="Senha" name="password"
                        onChange={this.handleChange} value={this.state.password} required />
                    <button type="submit">Login</button>
                </form>
            </div>
        );
    }
}

export default Login;