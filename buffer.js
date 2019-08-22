let buffer = new Buffer('abc\r\nasfafafasfafa\r\nafafadfad')
let buffer2 = new Buffer('\r\n')

console.log(buffer.split(buffer2))