import ReactDOM from 'react-dom/client';
import './common.css';
import App from './App';
import { TableStoreProvider } from './components';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
 /*  <React.StrictMode> */
        <TableStoreProvider>
          <App />
        </TableStoreProvider>
 /*  </React.StrictMode> */ 
);

