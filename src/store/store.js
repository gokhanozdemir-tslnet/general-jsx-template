import { applyMiddleware } from 'redux'
import { createStore, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { rootSaga } from './root-saga'
import storage from 'redux-persist/lib/storage'
import { persistReducer, persistStore } from 'redux-persist'
import { rootReducer } from './root-reducer'

/****redux-persist için  **/
const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['']
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const sagaMiddleware = createSagaMiddleware()

const middleWares = [sagaMiddleware]
const componsedEnchancers = compose(applyMiddleware(...middleWares))

export const store = createStore(persistedReducer, undefined, componsedEnchancers)

export const persistor = persistStore(store)

sagaMiddleware.run(rootSaga)
