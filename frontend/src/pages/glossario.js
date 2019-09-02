import React, { Component } from 'react';
import './pages.css'
import api from '../services/api';

class Glossario extends Component {

    state = {
        search: '',
        terms: [],
    };

    async componentDidMount(){
        //const response = await api.get('terms');
        //this.setState({terms: response.data});       
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

    render(){
        return (
            <div id="app">
                <p>GLOSSÁRIO</p>

                <div id="search-terms">
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
                                </tr>                           
                                { this.state.terms.map(term => (
                                    <tr  key={term.id}>
                                        <th>{term.term}</th>
                                        <th>{term.description}</th>
                                    </tr>                         
                                ))}                                    
                            </tbody>    
                        </table>              
                    </section>
                    
                </div>
            </div>
        );
    }
}

export default Glossario;