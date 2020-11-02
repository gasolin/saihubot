#!/usr/bin/env node
'use strict';
import meow from 'meow';
import SaihuBot from 'saihubot/dist/saihubot';
import {
  cliAdapter,
  addonSearch,
  addonConfirm,
  skillHelp,
} from 'saihubot-cli-adapter';
import {skills} from 'saihubot-skill-diagnostics';
import {skills as searchSkills} from 'saihubot-skill-search';
import {skillToday} from './saihubot-skill-today';

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

const bot = new SaihuBot({
  adapter: cliAdapter(cli),
  bot: '🤖',
  addons: [addonSearch, addonConfirm],
  skills: [
    ...skills,
    ...searchSkills,
    skillToday,
    skillHelp,
  ],
  debug: cli.flags && cli.flags.debug,
});

bot.ask(cli.input.join(' '));
