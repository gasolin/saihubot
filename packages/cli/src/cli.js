#!/usr/bin/env node
'use strict';
import meow from 'meow';
import SaihuBot from 'saihubot/dist/saihubot';
import {skills} from 'saihubot-skill-diagnostics';
import {skills as searchSkills} from 'saihubot-skill-search';
import {cliAdapter, addonSearch, addonConfirm, skillHelp} from 'saihubot-cli-adapter';

const cli = meow(`
  Usage
    $ saihu

  Options
    --debug show debug messages

  Examples
    $ saihu ping
  🤖: PONG
  $ saihu npm saihubot
`, {
  flags: {
    debug: {
      type: 'boolean',
      alias: 'd',
    },
  },
});

const skillToday = {
  name: 'today',
  help: 'today - Show today selections',
  requirements: [],
  rule: /TODAY/i,
  action: function(robot, msg) {
    robot.addons.confirm('What\'s up Today?', [
      {
        title: 'Weather',
        id: 'weather',
        rule: /WEATHER/i,
        action: () => robot.ask('g weather today'),
      },
      {
        title: 'Today in History',
        id: 'history',
        rule: /HISTORY/i,
        action: () => robot.ask('wolf today in history'),
      },
    ]);
  },
};

const bot = new SaihuBot({
  adapter: cliAdapter(cli),
  bot: '🤖',
  addons: [addonSearch, addonConfirm],
  skills: [...skills, ...searchSkills, skillToday, skillHelp],
  debug: cli.flags && cli.flags.debug,
});

bot.ask(cli.input.join(' '));
