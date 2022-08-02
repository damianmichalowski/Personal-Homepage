import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from '@redux-saga/core';
import reposReducer from '../Portfolio/reposSlice';
import rootSaga from './rootSaga';

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    repos: reposReducer
  },
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);