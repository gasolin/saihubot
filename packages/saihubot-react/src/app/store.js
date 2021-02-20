import { configureStore } from '@reduxjs/toolkit';
import saihubotReducer from 'saihubot-react-redux-adapter/dist';

export default configureStore({
  reducer: {
    saihubot: saihubotReducer,
  },
});
