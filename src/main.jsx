import React from 'react'
import ReactDOM from 'react-dom/client'

import AppRoutes from './routes.jsx'
import './styles/globalStyles.scss';

const root = ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppRoutes />
  </React.StrictMode>
);
