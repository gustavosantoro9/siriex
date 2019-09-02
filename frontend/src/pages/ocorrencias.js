import React, { Component } from 'react';
import './pages.css'
import api from '../services/api';

class Ocorrencias extends Component {

    state = {
        search: '',
        nome: '',
        local: '',
        datahora: '',
        tipo: '',
        solicitante: '',
        tipoexplosivo: '',
        tipoobjeto: '',
        caracteristicasfisicas: '',
        motivacao: '',
        iis: '',
        metodologia: '',
        aprovado: false,
        policial: 'gustavo',  // preciso fazer a lógica para pegar o atual user
        administrador: 'administrador', // preciso fazer a lógica de pegar o administrador que aprovar.
        currentId: 0,
        ocorrencias: [],
    };

    async componentDidMount(){
        const response = await api.get('occurrences');
        this.setState({ocorrencias: response.data});       
    }

    async componentDidUpdate(prevProps, prevState){
        // var x = document.getElementById("btn-listar");
        // x.style.display = "block";
        // var y = document.getElementById("btn-cadastrar");
        // y.style.display = "block";
        // var z = document.getElementById("btn-aprovar");
        // z.style.display = "block";
        // var a = document.getElementById("listar-ocorrencias");
        // a.style.display = "none";
        // var b = document.getElementById("cadastrar-ocorrencias");
        // b.style.display = "none";
        // var c = document.getElementById("aprovar-ocorrencias");
        // c.style.display = "none";
        // var d = document.getElementById("button-aprovar");
        // d.style.display = "none";
    }

    showNotApproved = async e =>{
        const response = await api.get('occurrencesnot');
        this.setState({ocorrencias: response.data});
    }

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    }

    handleSubmit = async e => {
        e.preventDefault();      
        const response = await api.post(`/occurrences/${this.state.search}`);
        this.setState({ocorrencias: response.data});
    }

    handleFormSubmit = async e => {
        e.preventDefault();

        const data = {
            nome: this.state.nome,
            local: this.state.local,
            datahora: this.state.datahora,
            tipo: this.state.tipo,
            solicitante: this.state.solicitante,
            tipoexplosivo: this.state.tipoexplosivo,
            tipoobjeto: this.state.tipoobjeto,
            caracteristicasfisicas: this.state.caracteristicasfisicas,
            motivacao: this.state.motivacao,
            iis: this.state.iis,
            metodologia: this.state.metodologia,
            aprovado: this.state.aprovado,
            policial: this.state.policial,
            administrador: this.state.administrador
        }

        await api.post('/newoccurrence', data);
    }

    async handleTableClick(id) {
        var x = document.getElementById("listar-ocorrencias");
        x.style.display = "none";
        var y = document.getElementById("aprovar-ocorrencias");
        y.style.display = "none";
        var z = document.getElementById("mais-detalhes");
        z.style.display = "block";

        this.setState({currentId: id});

        const response = await api.post(`/occurrences/id/${id}`);
        this.setState({ocorrencias: response.data});
    }

    async handleAprovarClick(id) { 
        if(id === 0){
            alert("nenhuma ocorrencia selecionada, por favor selecione uma");
        }
        else{
            await api.post(`/occurrences/aprove/${id}${this.state.administrador}`); 
            // preciso implementar passando o atual usuário
        }       
    }
    

    render(){

        function showListar(){       
            change();
        
            var x = document.getElementById("listar-ocorrencias");
            x.style.display = "block";
        }

        function showCadastrar(){
            change();

            var x = document.getElementById("cadastrar-ocorrencias");
            x.style.display = "block";
        }

        function showAprovar(){
            change();

            var x = document.getElementById("aprovar-ocorrencias");
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
            z.style.display = "none";
        }

        return (
            <div id="app">
                <p>OCORRÊNCIAS</p>
                <button onClick={showListar} id="btn-listar">Listar</button>
                <button onClick={showCadastrar} id="btn-cadastrar">Cadastrar</button>
                <button onClick={() => {this.showNotApproved() ; showAprovar()} } id="btn-aprovar">Aprovar</button>
                
                <div id="listar-ocorrencias">
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

                    <section id="table-section">
                        <table id="ocurrences">
                            <tbody>
                                <tr id="table-header">
                                    <th>Nome</th>
                                    <th>Local</th>
                                    <th>Data-Hora</th>
                                    <th>Tipo</th>
                                </tr>                           
                                { this.state.ocorrencias.map(ocorrencia => (
                                    <tr id="table-data" key={ocorrencia.id} onClick={() => this.handleTableClick(ocorrencia.id)}>
                                        <th>{ocorrencia.nome}</th>
                                        <th>{ocorrencia.local}</th>
                                        <th>{ocorrencia.datahora}</th>
                                        <th>{ocorrencia.tipo}</th>
                                    </tr>                         
                                ))}                                    
                            </tbody>    
                        </table>              
                    </section>
                </div>
                                    
                <div id="mais-detalhes">    
                    <section id="table">                
                        { this.state.ocorrencias.map(ocorrencia => (   
                            <table id="ocurrences"> 
                                <tbody>  
                                    <tr>
                                        <th>Nome</th>
                                        <td>{ocorrencia.nome}</td>
                                    </tr>     
                                    <tr>
                                        <th>Local</th>
                                        <td>{ocorrencia.local}</td>
                                    </tr>                  
                                    <tr>
                                        <th>Data Hora</th>
                                        <td>{ocorrencia.datahora}</td>
                                    </tr>  
                                    <tr>
                                        <th>Tipo</th>
                                        <td>{ocorrencia.tipo}</td>
                                    </tr>  
                                    <tr>
                                        <th>Solicitante</th>
                                        <td>{ocorrencia.solicitante}</td>
                                    </tr>  
                                    <tr>
                                        <th>Tipo Explosivo</th>
                                        <td>{ocorrencia.tipoexplosivo}</td>
                                    </tr>  
                                    <tr>
                                        <th>Tipo Objeto</th>
                                        <td>{ocorrencia.tipoobjeto}</td>
                                    </tr>  
                                    <tr>
                                        <th>Características Físicas</th>
                                        <td>{ocorrencia.caracteristicasfisicas}</td>
                                    </tr>  
                                    <tr>
                                        <th>Motivação</th>
                                        <td>{ocorrencia.motivacao}</td>
                                    </tr>  
                                    <tr>
                                        <th>IIS</th>
                                        <td>{ocorrencia.iis}</td>
                                    </tr>  
                                    <tr>
                                        <th>Metodologia</th>
                                        <td>{ocorrencia.metodologia}</td>
                                    </tr>       
                                    <tr>
                                        <th>Policial</th>
                                        <td>{ocorrencia.policial}</td>
                                    </tr>       
                                    <tr>
                                        <th>Administrador</th>
                                        <td>{ocorrencia.administrador}</td>
                                    </tr>  
                                </tbody>            
                            </table>           
                        ))}               
                    </section>                                         
                </div>

                <div id="cadastrar-ocorrencias">
                    <form id="new-ocurrence" onSubmit={this.handleFormSubmit}>
                        <input                             
                            type="text"
                            name="nome"
                            placeholder="Digite o nome ..."
                            onChange={this.handleChange}
                            value={this.state.nome}
                        />
                        <input                             
                            type="text"
                            name="local"
                            placeholder="Digite o local ..."
                            onChange={this.handleChange}
                            value={this.state.local}
                        />
                        <input                             
                            type="text"
                            name="datahora"
                            placeholder="Digite a data hora ..."
                            onChange={this.handleChange}
                            value={this.state.datahora}
                        />
                        <input                             
                            type="text"
                            name="tipo"
                            placeholder="Digite o tipo ..."
                            onChange={this.handleChange}
                            value={this.state.tipo}
                        />
                        <input                             
                            type="text"
                            name="solicitante"
                            placeholder="Digite o solicitante ..."
                            onChange={this.handleChange}
                            value={this.state.solicitante}
                        />
                        <input                             
                            type="text"
                            name="tipoexplosivo"
                            placeholder="Digite a tipo explosivo ..."
                            onChange={this.handleChange}
                            value={this.state.tipoexplosivo}
                        />
                        <input                             
                            type="text"
                            name="tipoobjeto"
                            placeholder="Digite o tipo objeto ..."
                            onChange={this.handleChange}
                            value={this.state.tipoobjeto}
                        />
                        <input                             
                            type="text"
                            name="caracteristicasfisicas"
                            placeholder="Digite as caracteristicas fisicas ..."
                            onChange={this.handleChange}
                            value={this.state.caracteristicasfisicas}
                        />
                        <input                             
                            type="text"
                            name="motivacao"
                            placeholder="Digite a motivacao ..."
                            onChange={this.handleChange}
                            value={this.state.motivacao}
                        />
                        <input                             
                            type="text"
                            name="iis"
                            placeholder="Digite o iis ..."
                            onChange={this.handleChange}
                            value={this.state.iis}
                        />
                        <input                             
                            type="text"
                            name="metodologia"
                            placeholder="Digite a metodologia ..."
                            onChange={this.handleChange}
                            value={this.state.metodologia}
                        />
                        <button type="submit" >Cadastrar</button>
                    </form>
                </div>

                <div id="aprovar-ocorrencias">
                    <section id="table">                
                        <table id="ocurrences">
                            <tbody>
                                <tr id="table-header">
                                    <th>Nome</th>
                                    <th>Local</th>
                                    <th>Data-Hora</th>
                                    <th>Tipo</th>
                                </tr>                           
                                { this.state.ocorrencias.map(ocorrencia => (
                                    <tr id="table-data" key={ocorrencia.id} onClick={() => this.handleTableClick(ocorrencia.id)}>
                                        <th>{ocorrencia.nome}</th>
                                        <th>{ocorrencia.local}</th>
                                        <th>{ocorrencia.datahora}</th>
                                        <th>{ocorrencia.tipo}</th>
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

export default Ocorrencias;