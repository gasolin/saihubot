#!/usr/bin/env node
'use strict';
import meow from 'meow';
import SaihuBot from 'saihubot/dist/saihubot';
import {skills} from 'saihubot-skill-diagnostics';
import {skills as searchSkills} from 'saihubot-skill-search';
import cliAdapter from 'saihubot-cli-adapter';
import {addonSearch} from 'saihubot-cli-adapter/saihubot-cli-addon-search';
import {addonConfirm} from 'saihubot-cli-adapter/saihubot-cli-addon-dialog';

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
    robot.addons.confirm('Here are samples', [
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
  skills: [...skills, ...searchSkills, skillToday],
  addons: [addonSearch, addonConfirm],
  bot: '🤖',
  debug: cli.flags && cli.flags.debug,
});

bot.ask(cli.input.join(' '));
