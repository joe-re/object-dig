module.exports = (target, ...keys) => {
  let digged = target;
  for (const key of keys) {
    if (typeof digged === 'undefined' || digged === null) {
      return undefined;
    }
    if (typeof key === 'function') {
      digged = key(digged);
    } else {
      digged = digged[key];
    }
  };
  return digged;
};
