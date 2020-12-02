/**
 * get related i18n dictionary.
 *
 * @param {object} i18n object
 * @param {string[]} i18n.props variables used in string
 */
export const getI18n = (i18n) => {
  if (!i18n) {
    console.log('i18n is not defined');
  }
  // add i18n.props if not defined
  if (!i18n.props) i18n.props = [];

  const envLang = process && process.env.SAIHUBOT_LANG;
  if (i18n[envLang]) {
      return i18n[envLang];
  }
  return i18n['en'];
}

/**
 * Light weight i18n support.
 *
 * define strings in an object
 * const i18n = {
 *   'en': {
 *     hello: 'Hello {{name}}',
 *   },
 *   'zh_TW': {
 *     hello: '你好，{{name}}',
 *   },
 *   props: ['name'],
 * }
 *
 * t('hello', { i18n, hello: 'world' })
 * // Hello World
 *
 * export SAIHUBOT=zh_TW
 * t('hello', { i18n, hello: 'world' })
 *
 * // 你好，world
 *
 * @param {string} str the string id
 * @param {object} args.i18n i18n object
 */
export const t = (str, args) => {
  const { i18n } = args;
  const msg = getI18n(i18n)[str];
  return msg
    ? i18n.props.reduce(
        (prev, cur) => args[cur]
          ? prev.replace(`{{${cur}}}`, args[cur])
          : prev
        , msg
      )
    : str;
}
