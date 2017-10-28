import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Finde from './App';
import registerServiceWorker from './registerServiceWorker';
import injectTapEventPlugin from 'react-tap-event-plugin';

//ReactDOM.render(<App />, document.getElementById('root'));

ReactDOM.render(
	<Finde />,
	document.getElementById('root')
	);
registerServiceWorker();
injectTapEventPlugin();