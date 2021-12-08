module.exports = function () {
  return this.map((item) => {
    const itemType = typeof item;
    if (itemType === 'string') return item;

    return itemType !== 'object' && !!item && typeof item.toString === 'function'
      ? item.toString()
      : JSON.stringify(item);
  });
}