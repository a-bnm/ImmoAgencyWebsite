import './bootstrap';
import '../css/app.css';
import 'bootstrap/dist/css/bootstrap.css'; 
import 'react-bootstrap-range-slider/dist/react-bootstrap-range-slider.css';

import React from 'react';
import { createRoot } from 'react-dom/client';
import { createInertiaApp } from '@inertiajs/inertia-react';
import { InertiaProgress } from '@inertiajs/progress';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import store from './Store/store';
import { Provider } from 'react-redux';


const appName = window.document.getElementsByTagName('title')[0]?.innerText || 'Laravel';
const elt = document.getElementById('root');
const logo = elt.dataset.logo;

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) => resolvePageComponent(`./Pages/${name}.jsx`, import.meta.glob('./Pages/**/*.jsx')),
    setup({ el, App, props }) {
        const root = createRoot(el);

        root.render(
            <Provider  store={store}>
                <App {...props} />
            </Provider>
        );
    },
});

InertiaProgress.init({ color: '#4B5563' });