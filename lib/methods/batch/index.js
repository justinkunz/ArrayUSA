module.exports = function (limit = this.length) {
  const len = Math.ceil(this.length / limit);

  let start = 0;
  let end = 0;

  return Array.apply(null, Array(len)).map(() => {
    start = end;
    end = start + limit;
    return this.slice(start, end);
  });
};
