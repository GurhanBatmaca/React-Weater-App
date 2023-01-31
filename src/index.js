import ReactDOM from 'react-dom/client';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { router } from './Router';
import { RouterProvider } from 'react-router-dom';

import { WeaterProvider } from './context/WeaterContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
        <WeaterProvider>
            <RouterProvider router={router} />
        </WeaterProvider>
    </>
);


