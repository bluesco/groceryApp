import {persistStore, persistReducer} from 'redux-persist'; // lưu các state xuống local storage để khi mở app lên thì nó sẽ lấy state từ local storage ra. nhanh hơn, đỡ get storage
import AsyncStorage from '@react-native-community/async-storage'; // để mà lưu được thì cần cái này
import createSagaMiddleware from 'redux-saga'; // middleware của redux-saga
import rootSaga from './sagaRoot'; // file root của redux-saga
import reducers from './reducerRoot';
import {createStore, applyMiddleware, compose} from 'redux';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: [], // các state mà mình muốn lưu xuống local storage
  // Blacklist (Don't Save Specific Reducers)
  blacklist: ['home', 'postNew', 'upload', 'auth'],
};

const persistedReducer = persistReducer(persistConfig, reducers);

// create redux redux-saga redux-dev-tool for browser
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// create redux redux-saga for mobile
const composeEnhancersRNDebugger =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
      })
    : compose;

const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];
const enhancers = [applyMiddleware(...middleware)];
export const store = createStore(
  persistedReducer,
  composeEnhancersRNDebugger(...enhancers),
);
export const persistor = persistStore(store);

sagaMiddleware.run(rootSaga);
