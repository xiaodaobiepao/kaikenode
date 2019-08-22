module.exports = function split (buffer, boundary) {
  let arr = []
  let n=0

  while ((n=buffer.indexOf(boundary)) !== -1) {
    arr.push(buffer.slice(0, n))
    buffer=buffer.slice(n+boundary.length)
  }
  arr.push(buffer)
  return arr
}