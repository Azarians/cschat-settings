import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App';
import { store } from './store';

window.history.pushState({}, '', '/?instance=649b60a0-eb22-4e28-9aab-b71024838001');

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
	<Provider store={store}>
		<App />
	</Provider>
);
