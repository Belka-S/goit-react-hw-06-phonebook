import { createStore } from 'redux';
import { devToolsEnhancer } from '@redux-devtools/extension';
import { combineReducers } from 'redux';
import storage from 'redux-persist/lib/storage';
import { persistStore, persistReducer } from 'redux-persist';
import { contactsReducer } from './contactsReducer';
import { filterReducer } from './filterReducer';

// ----------------persistReducer---------------- //

const rootPersistConfig = {
  key: 'phoneBook',
  storage,
  // blacklist: ['filter'],
};

const rootReducer = combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
});

const persistedReducer = persistReducer(rootPersistConfig, rootReducer);

// ----------------configureStore---------------- //

const enhancer = devToolsEnhancer();

export const store = createStore(persistedReducer, enhancer);

// -----------------persistStore----------------- //

export const persistor = persistStore(store);
