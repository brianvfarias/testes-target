function isFromFibonacci(value: number) {
  let answer = ""
  if (value === 0 || value === 1) {
    answer = "Pertence à sequência de fibonacci"
    return answer
  }

  let n1 = 0
  let n2 = 1
  let n3 = 0
  for (let i = 0; n3 < value; i++) {
    n3 = n1 + n2
    if (value === n3) {
      answer = "Pertence à sequência de fibonacci"
    } else {
      answer = "Não pertence à sequência de fibonacci"
    }

    n1 = n2
    n2 = n3

  }
  return answer
}

