// find the factorial number  of given number
let num = 28
let fact = 1
if (num == 0) {
  console.log("1")
} else if (num == 1) {
  console.log("1")
} else if (num < 0) {
  console.log("the factorial does not exist for negative number")
} else {
  for (let i = 1; i <= num; i++) {
    fact = fact * i
  }
  console.log(fact)
}
