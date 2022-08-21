import { randomizer } from './functions/randomizer.js'
import { servidor } from './util/server.js'
// import assert from 'node:assert'
// import test from 'node:test'


await servidor(5000)

const minNumber = 0
const maxNumber = 10
const precision = 1



const numero = randomizer(minNumber, maxNumber, precision) 




console.log(numero)


// return parseInt(random1)
// const result = resultado()
// console.log(resultado)