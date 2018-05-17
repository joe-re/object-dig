module.exports = (target, ...keys) => {
  let digged = target;
  if(digged === null){
    return undefined;
  }
  for (const key of keys) {
    if (typeof digged === 'undefined') {
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
