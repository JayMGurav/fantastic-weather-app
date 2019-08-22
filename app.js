import React from 'react';
import ReactDOM from 'react-dom';

import './public/style.css';
import App from './components/App.js';

ReactDOM.render(<App />, document.getElementById('root'),() => {console.log('to render')});

