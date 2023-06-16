import { StrictMode } from 'react';
import ReactDOM from 'react-dom';

import { App } from './App';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const root = ReactDOM.createRoot(document.getElementById('root') as Element);

root.render(
    <StrictMode>
        <App />
    </StrictMode>,
);
