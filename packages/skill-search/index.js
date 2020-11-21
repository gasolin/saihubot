import {
  skillSearchDuckduckgo,
  skillSearchWikipedia,
  skillSearchGoogle,
  skillSearchGoogletranslate,
  skillSearchGoogleimages,
  skillSearchGooglemaps,
  skillSearchGoogleTrends,
  skillSearchYoutube,
  skillSearchTwitter,
  skillSearchWolfram,
  skills as searchSkills,
} from './saihubot-skill-search.js';

import {
  skillSearchGithub,
  skillSearchMdn,
  skillSearchNpm,
  skillSearchStackoverflow,
  skillSearchCheatsh,
  skills as devSkills,
} from './saihubot-skill-dev-search.js';

const skills = [...searchSkills,  ...devSkills];

export {
  skillSearchDuckduckgo,
  skillSearchWikipedia,
  skillSearchGoogle,
  skillSearchGoogletranslate,
  skillSearchGoogleimages,
  skillSearchGooglemaps,
  skillSearchGoogleTrends,
  skillSearchYoutube,
  skillSearchTwitter,
  skillSearchWolfram,
  // dev
  skillSearchGithub,
  skillSearchMdn,
  skillSearchNpm,
  skillSearchStackoverflow,
  skillSearchCheatsh,
  skills,
};
