import React from 'react'

import { Provider } from 'react-redux';
import store from './state/store';
import { AppRouter } from './components/router/AppRouter';

export const AdoApp = () => {

    return (
        <Provider store={store}>
            <AppRouter />
        </Provider>
    )
}
