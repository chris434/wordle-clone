import {WORDS}from '../words'
export function getRandomWord(){
    const randomIndex = Math.floor(Math.random() * WORDS.length);
    return WORDS[randomIndex];
}