// This program run in console

for (let i = 0; i < 8; i++) {
  let str = ""
  for (let j = 0; j < i; j++) {
    str += "*"
  }

  console.log(str)
}

for (let i = 7; i > 0; i--) {
  let str = ""
  for (let j = 0; j < i; j++) {
    str += "*"
  }
  console.log(str)
}
