import SaihuBot from './packages/saihubot/src/saihubot.js';
import basicAdapter from './packages/html-adapter/saihubot-html-adapter.js';
import localforageBrain from './packages/html-adapter/saihubot-html-brain-localforage.js';
import {addons as dialogAddons} from './packages/html-adapter/saihubot-html-addon-dialog.js';
import {addons as cardAddons} from './packages/html-adapter/saihubot-html-addon-card.js';
import {addons as searchAddons} from './packages/html-adapter/saihubot-html-addon-search.js';
import {skills as helpSkills} from './packages/html-adapter/saihubot-html-skill-help.js';
import {skills as qrSkills} from './packages/html-adapter/saihubot-html-skill-qrcode.js';
import {skills as diagnosSkills} from './packages/skill-diagnostics/index.js';
import {skills as searchSkills} from './packages/skill-search/index.js';

// <div class="chat-message">
//     <div class="flex items-end">
//       <div class="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-2 items-start">
//           <div><span class="px-4 py-2 rounded-lg inline-block rounded-bl-none bg-gray-300 text-gray-600">Can be verified on any platform using docker</span></div>
//       </div>
//       <span class="w-6 h-6 rounded-full order-1">bot</span>
//     </div>
// </div>
// user
// <div class="chat-message">
//     <div class="flex items-end justify-end">
//       <div class="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-1 items-end">
//           <div><span class="px-4 py-2 rounded-lg inline-block rounded-br-none bg-blue-600 text-white ">Your error message says permission denied, npm global installs must be given root privileges.</span></div>
//       </div>
//       <span class="w-6 h-6 rounded-full order-2">user</span>
//     </div>
// </div>
const renderMessage = (message, charactor, role = 'bot') => {
  const messageWraper = document.createElement('span');
  messageWraper.className = role === 'bot'
    ? 'px-4 py-2 rounded-lg inline-block rounded-bl-none bg-gray-300 text-gray-600'
    : 'px-4 py-2 rounded-lg inline-block rounded-br-none bg-blue-600 text-white';
  if (typeof message === 'string') {
    messageWraper.textContent = message;
  } else if (message instanceof HTMLElement) {
    messageWraper.appendChild(message);
  }
  const messageDivL3 = document.createElement('div');
  const messageDivL2 = document.createElement('div');
  messageDivL2.className = role === 'bot' ?
    'flex flex-col space-y-2 text-xs max-w-xs mx-2 order-2 items-start' :
    'flex flex-col space-y-2 text-xs max-w-xs mx-2 order-1 items-end';

  const span = document.createElement('span');
  span.textContent = charactor;
  span.className = role === 'bot' ? 'w-6 h-6 rounded-full order-1' : 'w-6 h-6 rounded-full order-2';

  const messageDivL1 = document.createElement('div');
  messageDivL1.className = role === 'bot' ?
    'flex items-end' :
    'flex items-end justify-end';
  const botContainer = document.createElement('div');
  botContainer.className = 'chat-message';
  messageDivL3.appendChild(messageWraper);
  messageDivL2.appendChild(messageDivL3);
  messageDivL1.appendChild(messageDivL2);
  messageDivL1.appendChild(span);
  botContainer.appendChild(messageDivL1);
  return botContainer;
};

document.addEventListener('DOMContentLoaded', function() {
  const skillHome = {
    name: 'home',
    help: 'home - search github for saihubot',
    requirements: {},
    rule: /HOME/i,
    action: function(robot, msg) {
      robot.ask('github saihubot');
    },
  };
  const skillSample = {
    name: 'sample',
    help: 'sample - show saihu samples',
    requirements: {},
    rule: /SAMPLE/i,
    action: function(robot, msg) {
      robot.addons.confirm('Here are samples', [
        {
          title: 'hello',
          id: 'hello',
          rule: /hello/i,
          action: function() {
            robot.send('Open hello bot sample');
            robot.render();
            window.open('samples/index.html', '_blank');
          },
        },
        {
          title: 'skill',
          id: 'skill',
          rule: /SKILL/i,
          action: function() {
            robot.send('Open skill sample');
            robot.render();
            window.open('samples/skill.html', '_blank');
          },
        },
      ]);
    },
  };

  new SaihuBot({
    adapter: basicAdapter,
    brain: localforageBrain,
    welcomeMessage: 'Hello! type `help` to check skills I can serve',
    notFoundMessages: [
      'type `ping`, `time`, or `echo [message]` to see what\'s happened',
      'type `google [keyword]`, `wiki [keyword]` to search',
      'type `help` for full sample commands list',
      'Want more samples? type `samples`',
      'Try refresh the page, messages are cached locally',
      'type `github saihubot` to visit me and give a star!',
      'you can ask anything ex: `siri who is current Us president?`',
    ],
    botAlias: '🤖',
    userAlias: '😎',
    renderMessage,
    renderComponent: renderMessage,
    addons: [...dialogAddons, ...cardAddons, ...searchAddons],
    skills: [
      ...helpSkills,
      ...diagnosSkills,
      ...searchSkills,
      ...qrSkills,
      skillHome,
      skillSample,
    ],
    debug: true,
  });
});
