
// You should implement your task here.

module.exports = function towelSort(array) {
  if (!array) {
    return []
  }
  if (array.length === 0) {
    return []
  }
  array.map((item, index) => {
    if (index % 2 !== 0) {
      item = item.reverse();
    }
  })
  return array.join().split(',')
}
