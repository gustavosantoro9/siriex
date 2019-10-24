import React, { Component } from 'react';
import './pages.css'
import api from '../services/api';

class Usuarios extends Component {

    state = {
        name: null,
        email: null,
        password: null,
        admin: false,
        users: [],
    };

    async componentDidMount(){
        const response = await api.get('users');
        this.setState({users: response.data});
    }
    

    handleChange = e => {
        if(e.target.type === "checkbox"){
            this.setState(prevState => ({
                admin: !prevState.admin
            }));
        }
        else{
            this.setState({ [e.target.name]: e.target.value });
        }        
    }

    handleFormSubmit = async e => {
        e.preventDefault();

        const data = {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password,
            admin: this.state.admin
        }
            
        if(data.name && data.email && data.password){
            await api.post('/newuser', data);
            alert("Usuário cadastrado com sucesso.");
        }
        else{
            alert("Preencha todos os campos.");
        }
    }

    render(){

        function showListar(){       
            change();
        
            var x = document.getElementById("listar-usuarios");
            x.style.display = "block";
        }

        function showCadastrar(){
            change();

            var x = document.getElementById("cadastrar-usuarios");
            x.style.display = "block";
        }

        function change(){
            var x = document.getElementById("btn-listar");
            x.style.display = "none";

            var y = document.getElementById("btn-cadastrar");
            y.style.display = "none";
        }
        
        return (
            <div id="app">
                <p>USUÁRIOS</p>
                <button onClick={showListar} id="btn-listar">Listar</button>
                <button onClick={showCadastrar} id="btn-cadastrar">Cadastrar</button>
                
                <div id="listar-usuarios">
                    <section id="table">
                        <table id="users">
                            <tbody>
                                <tr id="table-header">
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Administrador</th>
                                </tr>
                                { this.state.users.map(user => (
                                    <tr key={user.id}>
                                        <th>{user.name}</th>
                                        <th>{user.email}</th>
                                        <th>{user.admin.toString()}</th>                                  
                                    </tr>                         
                                ))} 
                            </tbody>    
                        </table>              
                    </section>
                </div>
                
                <div id="cadastrar-usuarios">
                    <form id="new-user" onSubmit={this.handleFormSubmit}>
                        <input                             
                            type="text"
                            name="name"
                            placeholder="Digite o nome ..."
                            onChange={this.handleChange}
                            value={this.state.name}
                        />
                        <input                             
                            type="text"
                            name="email"
                            placeholder="Digite o email ..."
                            onChange={this.handleChange}
                            value={this.state.email}
                        />
                        <input                             
                            type="text"
                            name="password"
                            placeholder="Digite a senha ..."
                            onChange={this.handleChange}
                            value={this.state.password}
                        />
                        <label className='admin-label'> Administrador </label>
                        <input 
                            type="checkbox"
                            name="admin"
                            onChange={this.handleChange}
                            value={this.state.admin}
                            className='admin-check'
                        />
                        <button type="submit" >Cadastrar</button>
                    </form>
                </div>

            </div>
        );
    }
}

export default Usuarios;