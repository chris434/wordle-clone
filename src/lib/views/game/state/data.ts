import type { LetterMapType, WordAttemptsType } from "./types";
export const LETTER={latter:"",status:"none"}
export const ATTEMPTS_NUMBER=6
export const LETTER_BOX_NUMBER=5
function setRow(amount:number){
   return Array(amount).fill(LETTER)
}
export function initData(amount:number){
const data:WordAttemptsType[][]=Array(ATTEMPTS_NUMBER).fill(setRow(amount))
return data
}

export const LETTERS_MAP:LetterMapType={
    A:'none',
    B:'none',
    C:'none',
    D:'none',
    E:'none',
    F:'none',
    G:'none',
    H:'none',
    I:'none',
    J:'none',
    K:'none',
    L:'none',
    M:'none',
    N:'none',
    O:'none',
    P:'none',
    Q:'none',
    R:'none',
    S:'none',
    T:'none',
    U:'none',
    V:'none',
    W:'none',
    X:'none',
    Y:'none',
    Z:'none'
}