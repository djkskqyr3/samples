var keydownup = require("./keydownup.js")

keydownup(process.stdin)
process.stdin.on('keydown', function () {

})

process.stdin.on('keyup', function () {

})

process.stdin.on('keypress', function (ch, key) {
  if (key && key.name == "c" && key.ctrl) {
    console.log("exit")
    process.exit()
  }
})
process.stdin.setRawMode(true);
process.stdin.resume()

console.log('press Ctrl+C to stop.');


