import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

export default function Header(props) {
    // console.log(props);
    var admin = props.admin;
    var username = props.user;

    return (
        <header id="main-header">
            <div className="header-content">
                <ul>
                    <Link to="/">
                        <li>Home</li>
                    </Link>
                    <Link to={{
                        pathname: "/ocorrencias",
                        state: { admin: admin, policial: username, administrador: username }
                    }}>
                        <li>Ocorrências</li>
                    </Link>
                    {/* se não for admin, ocultar */}
                    { admin ? (
                        <Link to="/usuarios">
                            <li>Usuários</li>
                        </Link>
                    ) : null 
                    }
                    <Link to={{
                        pathname: "/glossario",
                        state: { admin: username, policial: username, administrador: admin }
                    }}>
                        <li>Glossário</li>    
                    </Link>
                </ul>
            </div>
        </header>
    );
}
