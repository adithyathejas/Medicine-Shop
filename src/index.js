import React from 'react';
import ReactDOM from 'react-dom/client';
import ItemProvider from './components/Context/Item-Context-Provider';

import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <ItemProvider>
    <App />
    </ItemProvider>
);
