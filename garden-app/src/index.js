import React from 'react';
import ReactDOM from 'react-dom';
import { ConfigProvider as AntProvider} from 'antd'
import 'antd/dist/antd.css'
import './assets/css/style.css';
import App from './components/App';
import 'leaflet/dist/leaflet.css'

ReactDOM.render(
  <React.StrictMode>
    <AntProvider direction='rtl'>
    <App />
    </AntProvider>
  </React.StrictMode>,
  document.getElementById('root')
);