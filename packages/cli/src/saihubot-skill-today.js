export const skillToday = {
  name: 'today',
  help: 'today - Show today selections',
  requirements: [],
  rule: /^TODAY/i,
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
