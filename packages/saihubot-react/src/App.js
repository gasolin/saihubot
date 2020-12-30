import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import SaihuBot from 'saihubot/dist/saihubot';
import {skills} from 'saihubot-skill-diagnostics';
import reduxAdapter from 'react-redux-adapter/saihubot-react-redux-adapter';
import {selectMessages} from 'react-redux-adapter/dist/features/saihubot/saihubotSlice';

import './App.css';

const BotMessage = ({message, key}) => {
  return (
    <div key={key} className="chat-message">
      <div className="flex items-end">
        <div className="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-2 items-start">
            <div><span className="px-4 py-2 rounded-lg inline-block rounded-bl-none bg-gray-300 text-gray-600">{message.msg}</span></div>
        </div>
        <span className="w-6 h-6 rounded-full order-1">{message.charactor}</span>
      </div>
    </div>
  )
}

const UserMessage = ({message, key}) => {
  return (
    <div key={key} className="chat-message">
      <div className="flex items-end justify-end">
        <div className="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-1 items-end">
            <div><span className="px-4 py-2 rounded-lg inline-block rounded-br-none bg-blue-600 text-white ">{message.msg}</span></div>
        </div>
        <span class="w-6 h-6 rounded-full order-2">{message.charactor}</span>
      </div>
    </div>
  )
}

const History = () => {
  const messages = useSelector(selectMessages);
  return (
    <div id="history" className="flex flex-col space-y-4 p-3 overflow-y-auto scrollbar-thumb-blue scrollbar-thumb-rounded scrollbar-track-blue-lighter scrollbar-w-2 scrolling-touch">
      {messages.map((message, idx) => message.role === 'bot'
        ? (<BotMessage key={idx} message={message} />)
        : (<UserMessage key={idx} message={message} />)
      )}
    </div>
  )
}

const MessageIn = () => {
  return (
    <div className="border-t-2 border-gray-200 px-4 pt-4 mb-2 sm:mb-0">
      <div className="relative flex">
        <span className="absolute inset-y-0 flex items-center">
          <button type="button" className="inline-flex items-center justify-center rounded-full h-12 w-12 transition duration-500 ease-in-out text-gray-500 hover:bg-gray-300 focus:outline-none">
            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-6 w-6 text-gray-600">
              <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z" />
            </svg>
          </button>
        </span>
        <input id="message" type="text" placeholder="Write Something" className="w-full focus:outline-none focus:placeholder-gray-400 text-gray-600 placeholder-gray-600 pl-12 bg-gray-200 rounded-full py-3" />
        <div className="absolute right-0 items-center inset-y-0 sm:flex">
          <button /*onClick={onClick}*/ id="send" type="button" className="inline-flex items-center justify-center rounded-full h-12 w-12 transition duration-500 ease-in-out text-white bg-blue-500 hover:bg-blue-400 focus:outline-none">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-6 w-6 transform rotate-90">
              <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    console.log('mount')
    const mybot = new SaihuBot({
      adapter: reduxAdapter(dispatch),
      welcomeMessage: 'Hello! type `help` to check skills I can serve',
      botAlias: '🤖',
      userAlias: '😎',
      skills: [...skills],
      debug: true,
    });
    return () => mybot.shutdown()
  }, [])

  return (
    <div className="flex-1 p:2 sm:p-6 justify-between flex flex-col h-screen">
      <History />
      <MessageIn />
    </div>
  );
}

export default App;
