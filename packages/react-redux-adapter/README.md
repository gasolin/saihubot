# `react-redux-adapter`

Saihubot Redux Adapter and reducer for React

Includes

* Adapter: saihubot-react-redux-adapter.js
* Reducer: features/saihubot/saihubotSlice.js

## Features

* support render saihubot messages to react web app

## Bootstrap Saihubot in React + Redux app

```
npx create-react-app init [project name]
cd [project name]
npm install react react-dom react-redux @reduxjs/toolkit saihubot saihubot-react-redux-adapter
```

Then construct the bot in file.

Add the redux Provider and store in `index.js`

```js
import { Provider } from 'react-redux';
import store from './app/store';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
```

Define `app/store.js` as

```js
import { configureStore } from '@reduxjs/toolkit';
import saihubotReducer from 'react-redux-adapter/dist/features/saihubot/saihubotSlice';

export default configureStore({
  reducer: {
    saihubot: saihubotReducer,
  },
});
```

Then define saihubot and message UI in App.js

```js
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    console.log('mount')
    const mybot = new SaihuBot({
      adapter: reduxAdapter(dispatch),
      skills: [...skills],
      // debug: true,
    });
    return () => mybot.shutdown()
  }, [])

  return (
    <div>
      <History />
      <MessageIn />
    </div>
  );
}
```

Please refer https://github.com/gasolin/saihubot/tree/gh-pages/packages/saihubot-react/src/App.js for the detail.
