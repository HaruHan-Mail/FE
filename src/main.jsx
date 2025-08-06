import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import '@utils/gsapInit.js';

createRoot(document.getElementById('root')).render(<App />);
