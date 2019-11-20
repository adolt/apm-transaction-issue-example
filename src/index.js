import React from 'react';
import ReactDOM from 'react-dom';
import { init } from '@elastic/apm-rum';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

init({
  serviceName: 'apm-rum',
  serverUrl: window.location.origin + '/.netlify/functions/apm-server',
})

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
