export type WordAttemptsType={
    letter:string
    status:Status
}

export type Status="corect"|'close'|'wrong'|'none'
export type LetterMapType={
    [key:string]:Status
}

export type Result={
    title:string
    headerTitle:string
    headerStatus:'ok'|'bad'
    score:string
    popupOpen:boolean
}|null