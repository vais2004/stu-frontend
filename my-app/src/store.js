import { configureStore } from '@reduxjs/toolkit';
import studentsReducer from './features/studentsSlice';
import schoolReducer from './features/schoolSlice';

export default configureStore({
  reducer: {
    students: studentsReducer,
    school: schoolReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
