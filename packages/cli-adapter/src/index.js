import cliAdapter from './saihubot-cli-adapter';
import {addonConfirm} from './saihubot-cli-addon-dialog.js';
import {
  addonSearch,
  addonOpenLink,
  addonFetch,
  addonExec,
} from './saihubot-cli-addon-search';
import {skillHelp} from './saihubot-cli-skill-help';

const addons = [
  addonConfirm,
  addonSearch,
  addonOpenLink,
  addonFetch,
  addonExec,
];

const skills = [skillHelp];

export {
  cliAdapter,
  addons,
  addonConfirm,
  addonSearch,
  addonOpenLink,
  addonFetch,
  addonExec,
  skills,
  skillHelp,
};
