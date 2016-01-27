export default (target, ...keys) => {
  let digged = target;
  for (const key of keys) {
    digged = digged[key];
    if (typeof digged === 'undefined') {
      return undefined;
    }
  };
  return digged;
};
