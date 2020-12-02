/**
 * get SAIHUBOT_[env] environment variable and
 * return as string or array.
 */
export const getConfig = (env, defaultValue) => {
  const param = process && process.env[`SAIHUBOT_${env}`];
  const data = param && param.indexOf(',') > 0
    ? param.split(',').map(item => item.trim())
    : param;
  return data
    ? data
    : defaultValue;
}
