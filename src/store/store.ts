import { combineReducers, configureStore } from '@reduxjs/toolkit';
import ticketReducer from './reducers/TicketsSlice';
import filterReducer from './reducers/FiltersSlice';

const rootReducer = combineReducers({
  ticketReducer,
  filterReducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
