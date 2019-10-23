let nomes = 'Guto'
let sobrenomes = 'Do var'

let nome_completoComOp = "Operador(+) " + nomes + " "+sobrenomes

let nome_completoComFunc = "Com Funcao (concat) " .concat(nomes,' ',sobrenomes)

let nome_completoComTemplate = `Com tamplate ({}): ${nomes} ${sobrenomes}`


console.log(nome_completoComFunc)
console.log(nome_completoComOp)
/* console.log(++[[]][+[]]+[+[]]) */
console.log(nome_completoComTemplate)
