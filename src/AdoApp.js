import React from 'react'

import { AppLayout } from './components/ui/AppLayout';
import { Provider } from 'react-redux';
import store from './state/store';


export const AdoApp = () => {

    return (
        <Provider store={store}>
            <AppLayout />
        </Provider>
    )
}
