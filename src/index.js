import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ensureTemplateScripts } from './utils/strnixScripts';

const root = ReactDOM.createRoot(document.getElementById('root'));
// StrictMode double-mount breaks one-shot jQuery template init (owl, mobile menu).
root.render(<App />);

// Load jquery/owl/custom-script once after the app shell mounts.
// Carousel re-init on route changes is handled in page components.
requestAnimationFrame(() => {
  ensureTemplateScripts().catch((err) => {
    // eslint-disable-next-line no-console
    console.error(err);
  });
});

reportWebVitals();
