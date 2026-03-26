import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import UsuariosPage from './pages/UsuariosPage';
import LivrosPage from './pages/LivrosPage';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <nav className="navbar">
          <h1>🏋️ Gym Rats de Livros</h1>
          <ul>
            <li><a href="/">Dashboard</a></li>
            <li><a href="/usuarios">Usuários</a></li>
            <li><a href="/livros">Livros</a></li>
            <li><a href="/leituras">Leituras</a></li>
            <li><a href="/desafios">Desafios</a></li>
            <li><a href="/ranking">Ranking</a></li>
          </ul>
        </nav>
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route path="/usuarios" component={UsuariosPage} />
          <Route path="/livros" component={LivrosPage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;