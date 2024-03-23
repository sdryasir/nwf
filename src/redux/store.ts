import { combineReducers, configureStore } from '@reduxjs/toolkit'
import counterReducer from './counterSlice';
import projectsReducer from './projectsReducer';
import { persistStore, persistReducer, FLUSH, REHYDRATE, PERSIST, PAUSE, PURGE, REGISTER } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  // whitelist: ['key1', 'key2'],//Things you want to persist
  // blacklist: ['key3', 'key4'],//Things you don't want to persist
};

const rootReducer = combineReducers({
  counter:counterReducer,
  projects:projectsReducer
})
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
export const persistor = persistStore(store);



export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
