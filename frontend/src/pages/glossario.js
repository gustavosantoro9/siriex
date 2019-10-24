import React, { Component } from 'react';
import './pages.css'
import api from '../services/api';

class Glossario extends Component {

    state = {
        search: '',
        term: '',
        description: '',
        approved: false,
        user: this.props.location.state.policial,
        admin: this.props.location.state.policial,
        origin: '',
        currentId: 0,
        terms: [],

        administrador: this.props.location.state.administrador
    };

    async componentDidMount(){
        //const response = await api.get('terms');
        //this.setState({terms: response.data});       
    }


    showNotApproved = async e =>{
        const response = await api.get('termsnot');
        this.setState({terms: response.data});
    }

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    }

    handleSubmit = async e => {
        e.preventDefault();      
        const response = await api.post(`/terms/${this.state.search}`);
        this.setState({terms: response.data});
        var x = document.getElementById("table-terms");
        x.style.display = "block";
    }

    handleCheck = async e => {
        var id = e.currentTarget.dataset.id;
        //console.log(id);

        const response = await api.post(`/terms/letter/${id}`);
        this.setState({terms: response.data});

        var x = document.getElementById("table-terms");
        x.style.display = "block";
    }

    handleFormSubmit = async e => {
        e.preventDefault();

        const data = {
            term: this.state.term,
            description: this.state.description,
            letter: this.state.term.substring(0,1),
            approved: this.state.approved,
            user: this.state.user,
            origin: this.state.origin
        }

        if(data.term && data.description){
                await api.post('/newterm', data);
                alert("Termo cadastrado com sucesso.");               
        }
        else{
            alert("Preencha todos os campos, apenas a fonte é opcional.");
        }
    }

    async handleTableClick(id) {
        this.setState({currentId: id});
    }

    async handleAprovarClick(id) { 
        if(id === 0){
            alert("Nenhum termo selecionado, por favor selecione um.");
        }
        else{
            const response = await api.post(`/terms/aprove/${id}&${this.state.admin}`); 
            if(response){
                alert("Termo aprovado.");
            }
        }       
    }  

    render(){

        function showListar(){       
            change();       
            var x = document.getElementById("searchTerms");
            x.style.display = "block";
        }

        function showCadastrar(){
            change();
            var x = document.getElementById("validateTerms");
            x.style.display = "block";
        }

        function showAprovar(){
            change();
            var x = document.getElementById("approveTerms");
            x.style.display = "block";
            var y = document.getElementById("button-aprovar");
            y.style.display = "block";
        }

        function change(){
            var x = document.getElementById("btn-listar");
            x.style.display = "none";
            var y = document.getElementById("btn-cadastrar");
            y.style.display = "none";
            var z = document.getElementById("btn-aprovar");
            if(z)
                z.style.display = "none";
        }

        return (
            <div id="app">
                <p>GLOSSÁRIO</p>
                <button onClick={showListar} id="btn-listar">Listar</button>
                <button onClick={showCadastrar} id="btn-cadastrar">Cadastrar</button>
                {/* se nao for admin, ocultar */}
                {
                    this.state.administrador ? 
                    (<button onClick={() => {this.showNotApproved() ;
                         showAprovar()} } id="btn-aprovar">Aprovar</button>
                    ) : null 
                }
                
                <div id="searchTerms">
                    <form id="search-box" onSubmit={this.handleSubmit}>
                        <input 
                            type="text"
                            name="search"
                            placeholder="Procurar por nome ..."
                            onChange={this.handleChange}
                            value={this.state.search}
                        />
                        <button type="submit">Buscar</button>
                    </form>

                    <section id="alphabet">
                        <ul>
                            <li onClick={this.handleCheck.bind(this)} data-id="A"><span>A</span></li>
                            <li onClick={this.handleCheck.bind(this)} data-id="B"><span>B</span></li>
                            <li onClick={this.handleCheck.bind(this)} data-id="C"><span>C</span></li>
                            <li onClick={this.handleCheck.bind(this)} data-id="D"><span>D</span></li>
                            <li onClick={this.handleCheck.bind(this)} data-id="E"><span>E</span></li>
                            <li onClick={this.handleCheck.bind(this)} data-id="F"><span>F</span></li>
                            <li onClick={this.handleCheck.bind(this)} data-id="G"><span>G</span></li>
                            <li onClick={this.handleCheck.bind(this)} data-id="H"><span>H</span></li>
                            <li onClick={this.handleCheck.bind(this)} data-id="I"><span>I</span></li>
                            <li onClick={this.handleCheck.bind(this)} data-id="J"><span>J</span></li>
                            <li onClick={this.handleCheck.bind(this)} data-id="K"><span>K</span></li>
                            <li onClick={this.handleCheck.bind(this)} data-id="L"><span>L</span></li>
                            <li onClick={this.handleCheck.bind(this)} data-id="M"><span>M</span></li>
                            <li onClick={this.handleCheck.bind(this)} data-id="N"><span>N</span></li>
                            <li onClick={this.handleCheck.bind(this)} data-id="O"><span>O</span></li>
                            <li onClick={this.handleCheck.bind(this)} data-id="P"><span>P</span></li>
                            <li onClick={this.handleCheck.bind(this)} data-id="Q"><span>Q</span></li>
                            <li onClick={this.handleCheck.bind(this)} data-id="R"><span>R</span></li>
                            <li onClick={this.handleCheck.bind(this)} data-id="S"><span>S</span></li>
                            <li onClick={this.handleCheck.bind(this)} data-id="T"><span>T</span></li>
                            <li onClick={this.handleCheck.bind(this)} data-id="U"><span>U</span></li>
                            <li onClick={this.handleCheck.bind(this)} data-id="V"><span>V</span></li>
                            <li onClick={this.handleCheck.bind(this)} data-id="W"><span>W</span></li>
                            <li onClick={this.handleCheck.bind(this)} data-id="X"><span>X</span></li>
                            <li onClick={this.handleCheck.bind(this)} data-id="Y"><span>Y</span></li>
                            <li onClick={this.handleCheck.bind(this)} data-id="Z"><span>Z</span></li>    
                        </ul>
                    </section>
                    
                    <section id="table-terms">
                        <table id="terms">
                            <tbody>
                                <tr id="table-header">
                                    <th>Termo</th>
                                    <th>Descrição</th>
                                    <th>Fonte</th>
                                </tr>                           
                                { this.state.terms.map(term => (
                                    <tr  key={term.id}>
                                        <th>{term.term}</th>
                                        <th>{term.description}</th>
                                        <th>{term.origin}</th>
                                    </tr>                         
                                ))}                                    
                            </tbody>    
                        </table>              
                    </section>                   
                </div>

                <div id="validateTerms">
                    <form id="new-term" onSubmit={this.handleFormSubmit}>
                        <input                             
                            type="text"
                            name="term"
                            placeholder="Digite o termo ..."
                            onChange={this.handleChange}
                            value={this.state.term}
                        />
                        <input                             
                            type="text"
                            name="description"
                            placeholder="Digite a descrição ..."
                            onChange={this.handleChange}
                            value={this.state.description}
                        />
                        <input                             
                            type="text"
                            name="origin"
                            placeholder="Digite a fonte se desejar ..."
                            onChange={this.handleChange}
                            value={this.state.origin}
                        />
                        <button type="submit">Cadastrar</button>
                    </form>
                </div>

                <div id="approveTerms">
                    <section id="table">                
                        <table id="terms">
                            <tbody>
                                <tr id="table-header">
                                    <th>Termo</th>
                                    <th>Descrição</th>
                                    <th>Fonte</th>
                                    <th>Usuário requisitor</th>
                                </tr>                           
                                { this.state.terms.map(term => (
                                    <tr id="table-data" key={term.id} onClick={() => this.handleTableClick(term.id)}>
                                        <th>{term.term}</th>
                                        <th>{term.description}</th>
                                        <th>{term.origin}</th>
                                        <th>{term.user}</th>
                                    </tr>                         
                                ))}                                    
                            </tbody>    
                        </table> 
                    </section>     
                </div>

                <div id="button-aprovar">
                    <button onClick={() => this.handleAprovarClick(this.state.currentId)}>Aprovar</button>   
                </div>

            </div>
        );
    }
}

export default Glossario;