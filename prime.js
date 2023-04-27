// program to check the number is prime number
let num = 71
if (num == 1) {
  console.log("the number neither prime not composite")
} else if (num < 1) {
  console.log("negative number is not a prime number")
} else {
  for (let i = 2; i < num; i++) {
    if (num % i == 0) {
      var res = `${num} is  not prime number`
      break
    } else {
      var res = `${num} is  a prime number`
    }
  }
  console.log(res)
}
