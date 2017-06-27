import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Router><Route path="/" component={App} /></Router>, document.getElementById('root'));
registerServiceWorker();
