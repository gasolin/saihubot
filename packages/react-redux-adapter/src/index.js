import reduxAdapter from './saihubot-react-redux-adapter';
import {
  selectMessages,
  selectLoading,
  saihubotSlice,
} from './features/saihubot/saihubotSlice';

export default {
  reduxAdapter,
  selectMessages,
  selectLoading,
  reducer: saihubotSlice.reducer,
};
