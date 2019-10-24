import React, {useState} from 'react';
import Routes from './routes';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header';
import './App.css'
import api from './services/api';



function App() {

  const [state, setState] = useState({
    password: '',
    username: '',
    admin: '',
  });


  const handleChange = e => {
      setState({ ...state, [e.target.name]: e.target.value });
  }

  async function showListar(){       
   
    if(state.username && state.password){
      const response = await api.post(`/login/${state.username}&${state.password}`);
      //console.log(JSON.stringify(response.data[0].admin, null, 4));
      
      if(response.data){
        var x = document.getElementById("site");
        x.style.display = "block";
        var y = document.getElementById("application");
        y.style.display = "none"

        setState({...state, admin: response.data[0].admin});

        // alert(admin);
      }
      else{
        alert("Usuário e Senha Incorretos.");
      }

    }
    else{
      alert("Preencha todos os campos.");
    } 
  }

  return (

    <div className="App">
      
      <div id="application">
        <input type="text" placeholder="Email" id="email" name="username" value={state.username} onChange={handleChange} />
        <input type="password" placeholder="Senha" id="password"  name="password" value={state.password} onChange={handleChange} />
        <button onClick={showListar} id="btn-login">Login</button>
      </div>
      
      <div id="site">
        <BrowserRouter>
          <Header user={state.username} admin={state.admin}/>
          <Routes  user={state.username} admin={state.admin} />
        </BrowserRouter>    
      </div>


    </div>
  ); 
}

export default App;