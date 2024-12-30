import type { KeyboardEventType } from "./types";
import { game } from "$lib/views/game/state/game.svelte";
import { BACKSPACE_KEY, KEYBOARD_KEYS_LIST } from "../data";

const {addLetter,removeLetter,enterWord}=game
function getHasKey(e:KeyboardEventType,hasKeyCb:(key:string)=>void,isBackspace:()=>void){
    if(game.result) return
    const lowerKey=e.key.toLocaleLowerCase()
    const hasKey=KEYBOARD_KEYS_LIST.find(({key})=> key.toLowerCase() === lowerKey||lowerKey==='backspace'&&key===BACKSPACE_KEY)
    if(hasKey?.key===BACKSPACE_KEY) return isBackspace()
    if(hasKey)return hasKeyCb(hasKey.key)
}
export function keyDownHander(e:KeyboardEventType,cb:(key:string)=>void){
getHasKey(e,key=> cb(key),()=>cb(BACKSPACE_KEY))
}

export function keyPressHandler(e:KeyboardEventType){
    console.log(e.key)
    getHasKey(e,key=>{
        if(key==='Enter')return enterWord()
        console.log(key)
        addLetter(key)
    },()=>removeLetter())
    }

