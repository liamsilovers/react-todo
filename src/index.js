import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Comp from './Comp';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Comp />, document.getElementById('root'));
registerServiceWorker();
