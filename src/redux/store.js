import {createStore,applyMiddleware} from 'redux'
import {persistStore} from 'redux-persist'
import {composeWithDevTools} from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import rootReducer from './rootReducer'

const middlewares=[thunk]

if(process.env.NODE_ENV === 'development')
middlewares.push(logger)

export const store=createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(...middlewares))
)

export const persistor=persistStore(store)



