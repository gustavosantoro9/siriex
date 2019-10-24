import  React,{ Component } from 'react';
import './pages.css'
import api from '../services/api';
import Moment from 'react-moment';

class Home extends Component {

    state = {
        ocorrencias: []
    };
        
    async componentDidMount(){
        const response = await api.get('5occurrences');
        this.setState({ocorrencias: response.data});    
    }


    render(){
        return (
            <div id="app">
                <p> <b> ÚLTIMAS 5 OCORRÊNCIAS </b></p>
                <div id="homeTable">
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
                                    <tr id="table-data" key={ocorrencia.id}>
                                        <th>{ocorrencia.nome}</th>
                                        <th>{ocorrencia.local}</th>
                                        <th><Moment date={new Date(ocorrencia.datahora)} format="DD/MM/YYYY HH:MM"/></th>
                                        <th>{ocorrencia.tipo}</th>
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

export default Home;
