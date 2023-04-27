//program of table
function table(num) {
  for (let i = 1; i <= 10; i++) {
    let temp = num * i
    console.log(`${num}x${i}=${temp}`)
  }
}
let number = table(6)
