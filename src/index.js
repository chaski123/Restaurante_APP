import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { AuthProvider } from './context/authContext';
import AppRouter from './router';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
      <AuthProvider>
			<BrowserRouter>
				<AppRouter />
			</BrowserRouter>
		</AuthProvider>
    </React.StrictMode>
);
