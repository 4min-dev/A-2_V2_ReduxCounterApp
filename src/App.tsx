import React from 'react';
import './style/css/main.css';
import { RouterProvider } from 'react-router-dom';
import { globalRouter } from './router/globalRouter';
import { Provider } from 'react-redux';
import { globalStore } from './redux/store/globalStore';

export const App = () => {
  return (
    <React.StrictMode>
        <Provider store={globalStore}>
            <RouterProvider router={globalRouter}>
            </RouterProvider>
        </Provider>
    </React.StrictMode>
  )
}