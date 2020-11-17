// import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App h-screen overflow-hidden flex items-center justify-center">
      <div className="App-header flex-1 p:2 sm:p-6 justify-between flex flex-col h-screen">
        {/* <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </div>
      <div id="history" className="flex flex-col space-y-4 p-3 overflow-y-auto scrollbar-thumb-blue scrollbar-thumb-rounded scrollbar-track-blue-lighter scrollbar-w-2 scrolling-touch"></div>
    </div>
  );
}

export default App;
