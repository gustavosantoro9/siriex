import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header id="main-header">
        <div className="header-content">
            <ul>
                <Link to="/">
                    <li>Home</li>
                </Link>
                <Link to="/ocorrencias">
                    <li>Ocorrências</li>
                </Link>
                <Link to="/usuarios">
                    <li>Usuários</li>
                </Link>
                <Link to="/glossario">
                    <li>Glossário</li>    
                </Link>
            </ul>
        </div>
    </header>
  );
}
