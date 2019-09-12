import React from 'react';
import ReactDOM from 'react-dom';

// import { createBrowserHistory } from 'history';
// import { routerMiddleware, connectRouter } from 'connected-react-router';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
// import { createLogger } from 'redux-logger';
import reducer from './store/ducks';
import rootSaga from './store/sagas';

import App from './app/app';

import './index.scss';

// const history = createBrowserHistory({
//     basename: process.env.PUBLIC_URL
// });

const sagaMiddleware = createSagaMiddleware();

const middleware = [
    // routerMiddleware(history),
    sagaMiddleware
];

const initialState = {
    // intl: {
    //     locale: 'pt',
    //     messages: {
    //         'teste1': 'teste1'
    //     }
    // }
};

// if (process.env.NODE_ENV !== 'production') {
//     middleware.push(createLogger());
// }

const store = createStore(
	// connectRouter(history)(reducer),
	reducer,
    initialState,
    applyMiddleware(...middleware)
);

sagaMiddleware.run(rootSaga);

ReactDOM.render(
    <Provider store={store}>
        {/* <App history={history} /> */}
		<App />
    </Provider>,
    document.getElementById('root')
);