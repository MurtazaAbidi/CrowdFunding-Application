import { createStore } from 'redux';
import rootReducer from '../services/reducer'
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
    key:'persist-key',
    storage
}
const persistedReducer = persistReducer(persistConfig, rootReducer)
const store = createStore(persistedReducer);
const persistor = persistStore(store)

export default store;
export {persistor};