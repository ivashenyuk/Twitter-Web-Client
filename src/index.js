import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './App.js';
import Finde from './App';
import registerServiceWorker from './registerServiceWorker';


//ReactDOM.render(<App />, document.getElementById('root'));

ReactDOM.render(
	<Finde />,
	document.getElementById('root')
	);
registerServiceWorker();