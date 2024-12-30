import { WORDS } from "../words";

export function checkHasWord(selectedWord:string){
   const word= WORDS.find(word=> word===selectedWord)
   return word
}