import { configureStore } from '@reduxjs/toolkit';
import saihubotReducer from 'react-redux-adapter/dist/features/saihubot/saihubotSlice';

export default configureStore({
  reducer: {
    saihubot: saihubotReducer,
  },
});
