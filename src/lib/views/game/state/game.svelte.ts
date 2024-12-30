import { ATTEMPTS_NUMBER, initData, LETTER_BOX_NUMBER, LETTERS_MAP } from "./data";
import type { LetterMapType, Result, Status, WordAttemptsType } from "./types";
import { checkHasWord } from "./utils/checkHasWord";
import { getRandomWord } from "./utils/getRandomWord";


class Game{
     attempts:WordAttemptsType[][]=$state(initData(LETTER_BOX_NUMBER))
    letterMap:LetterMapType= $state(LETTERS_MAP)
    targetWord:{word:string}=$state({word:getRandomWord()})
    message:{title:string,stay:boolean}=$state({title:'',stay:false})
     currentAttempt:{value:number}=$state({value:0})
     result:Result=$state(null)
     currentLetterBox=0
     addLetter=(letter:string)=>{
     if(this.currentLetterBox<LETTER_BOX_NUMBER){
     this.attempts[this.currentAttempt.value][this.currentLetterBox]={letter,status:'none'}
      this.currentLetterBox++
     }
   }
  removeLetter=()=>{
     if(this.currentLetterBox){
          this.currentLetterBox--
          this.attempts[this.currentAttempt.value][this.currentLetterBox]= {letter:'',status:'none'}
     }
    }

    #setMessage=(title:string,stay:boolean=false)=>{
     this.message={title,stay}
     if(!stay){
          setTimeout(()=>{
               this.message.title=''
       },2000)
     }
    }
 #getWord=()=>{
     return this.attempts[this.currentAttempt.value].reduce((a,b)=>a= a+b.letter,'')
}
  enterWord=()=>{
     if(this.currentLetterBox!==LETTER_BOX_NUMBER){
          this.#setMessage('Word too short')
          return   
     }
   
    if(!checkHasWord(this.#getWord())){
     this.#setMessage('Word not found')
      return
    } 
    
const splitTargetWord=this.targetWord.word.split('')
let copyLetterMap:LetterMapType=this.letterMap
   this.attempts= this.attempts.map((attempt,i)=>{
          if(i===this.currentAttempt.value) return attempt.map((leterItem,i)=>{
          let newStatus:Status='none'
            if(leterItem.letter===splitTargetWord[i]) {
               newStatus='corect'
            }else if(splitTargetWord.includes(leterItem.letter)){
               newStatus='close'
            }else if(copyLetterMap[leterItem.letter]!=='corect'){
               newStatus='wrong'
            }
            const currentStatus=copyLetterMap[leterItem.letter]
            const newLetter={...copyLetterMap,[leterItem.letter]:newStatus}
          if(currentStatus==='close'&&newStatus==='corect'||currentStatus==='none')copyLetterMap=newLetter
           return {letter:leterItem.letter,status:newStatus}
         })
          return attempt
     })

     const FIRST_TIME_OUT=200
     setTimeout(() =>{
          this.letterMap=copyLetterMap
     },LETTER_BOX_NUMBER*FIRST_TIME_OUT)
     
   const currentAttempt=this.currentAttempt.value
   const isTargetWordValue=this.#getWord()===this.targetWord.word
     if(currentAttempt===LETTER_BOX_NUMBER||isTargetWordValue){
          const headerTitle=`you ${isTargetWordValue?'won':'lost'}`
          const title=`The word is ${this.targetWord.word.toLocaleLowerCase()} `
          setTimeout(() =>{
               this.result={
                    title,
                    headerTitle,
                    headerStatus:isTargetWordValue?'ok':'bad',
                    score:`Gusse score ${currentAttempt+1} / ${ATTEMPTS_NUMBER}`,
                    popupOpen:true
                   }
          },LETTER_BOX_NUMBER*FIRST_TIME_OUT+1000)

          setTimeout(() =>{
            this.#setMessage(title,true)
          },LETTER_BOX_NUMBER*FIRST_TIME_OUT+200)

      }else if(this.currentAttempt.value<ATTEMPTS_NUMBER) {
          this.currentAttempt.value++
          this.currentLetterBox=0
     }
    }

    closePopup=()=>{
     this.result?this.result={...this.result,popupOpen:false}:null
    }

    #setTagetWord=()=>{
     return this.targetWord.word=getRandomWord()
  }

    resetGame=()=>{
     this.attempts=initData(LETTER_BOX_NUMBER)
     this.letterMap=LETTERS_MAP
     this.message={title:'',stay:false}
     this.currentAttempt.value=0
     this.currentLetterBox=0
     this.result=null
     this.#setTagetWord()
    }

}

export const game=new Game()


