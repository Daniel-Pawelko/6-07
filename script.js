document.getElementById('button-id').addEventListener('click', multiply)
const output = document.getElementById('output-id')

function multiply () {
  let a = document.getElementById('input-id').value
  a = parseFloat(a)
  let mult = document.getElementById('input-mult').value
  console.log(mult)
  mult = parseFloat(mult) + 1
  console.log(mult)
  let b = 0
  let final = 0
  if (a < 0 && mult < 0) {
    console.log('both numbers are negative')
    mult = -mult + 1
    a = -a
    console.log('a:', a, '  mult:', mult)
    while (b !== mult) {
      console.log('b:', b)
      console.log('final:', final)
      final += a
      b++
    }
    output.innerHTML = final
  } else {
    while (b !== mult) {
      console.log('b:', b)
      console.log('final:', final)
      final += a
      b++
    }
    output.innerHTML = final - a
  }
}
