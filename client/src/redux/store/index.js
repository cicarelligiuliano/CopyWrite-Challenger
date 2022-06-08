import { configureStore } from '@reduxjs/toolkit';

import rootReducer from '../reducer';

const store = configureStore({ reducer: { reducer: rootReducer } });

export default store;
