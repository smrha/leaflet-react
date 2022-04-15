import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as RouterProvider } from 'react-router-dom'
import { ConfigProvider as AntProvider} from 'antd'
import 'antd/dist/antd.css'
import './assets/css/style.css';
import App from './components/App';
import 'leaflet/dist/leaflet.css'

ReactDOM.render(
  <React.StrictMode>
    <RouterProvider>
      <AntProvider direction='rtl'>
        <App />
      </AntProvider>
    </RouterProvider>
  </React.StrictMode>,
  document.getElementById('root')
);