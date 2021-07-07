module.exports = function(record) {
  record.completed = Boolean(record.completed);
  return record;
}