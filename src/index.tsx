import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App';
import { store } from './store';
import { createTheme, ThemeProvider } from '@mui/material';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

const theme = createTheme({
	components: {
		MuiButton: {
			defaultProps: {
				size: 'small'
			}
		},
		MuiAutocomplete: {
			defaultProps: {
				size: 'small'
			}
		},
		MuiTextField: {
			defaultProps: {
				size: 'small'
			}
		},
		MuiChip: {
			defaultProps: {
				size: 'small'
			}
		},
		MuiLink: {
			defaultProps: {
				fontSize: '0.877rem'
			}
		},
		MuiToggleButtonGroup: {
			defaultProps: {
				size: 'small',
				color: 'primary'
			}
		}
	}
});

root.render(
	<Provider store={store}>
		<ThemeProvider theme={theme}>
			<App />
		</ThemeProvider>
	</Provider>
);
