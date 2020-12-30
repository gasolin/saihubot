import { createSlice } from '@reduxjs/toolkit';

export const saihubotSlice = createSlice({
  name: 'saihubot',
  initialState: {
    messages: [],
    loading: false,
  },
  reducers: {
    send: (state, action) => {
      state.loading = true;
      state.messages.push(action.payload);
    },
    render: state => state.loading = false,
  }
});

export const { send, render } = saihubotSlice.actions;

export const selectMessages = state => state.saihubot.messages;
export const selectLoading = state => state.saihubot.loading;

export default saihubotSlice.reducer;
