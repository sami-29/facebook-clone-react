import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import Main from './components/Main.jsx'

const App = () => {
    return (
        <Main/>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));

