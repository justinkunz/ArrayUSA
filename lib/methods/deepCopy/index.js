module.exports = function () {
  function handleArray(arr) {
    return arr.map((a) => createCopy(a));
  }

  function createCopy(itm) {
    switch (typeof itm) {
      case 'object':
        return handleObject(itm);
      case 'symbol':
        return Symbol();
      default:
        return itm;
    }
  }

  function handleDate(date) {
    return new Date(date.valueOf());
  }

  function handleObject(obj) {
    if (Array.isArray(obj)) return handleArray(obj);
    if (obj instanceof Date) return handleDate(obj);

    const copiedObj = {};
    for (key in obj) {
      copiedObj[key] = createCopy(obj[key]);
    }

    return copiedObj;
  }

  return handleArray(this);
};
