import { applyMiddleware } from 'redux'
import { createStore, compose } from 'redux'
import { rootReducer } from './root-reducer'
import createSagaMiddleware from 'redux-saga'
import { rootSaga } from './root-saga'

const sagaMiddleware = createSagaMiddleware()

const middleWares = [sagaMiddleware]
const componsedEnchancers = compose(applyMiddleware(...middleWares))
export const store = createStore(rootReducer, undefined, componsedEnchancers)

sagaMiddleware.run(rootSaga)
