cont = 9;

while (true) {
  if (cont % 3 === 0) {
    console.log("Pim")
  } else {
    console.log(cont)
  }
  cont++
  if (cont > 25) {
    break
  }
}
