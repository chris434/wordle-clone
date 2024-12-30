import type { ButtonEvent } from "./types";

export function blurButton(e:ButtonEvent,cb:() => void){
e.currentTarget.blur();
cb()
}