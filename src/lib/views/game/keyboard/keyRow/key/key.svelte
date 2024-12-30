<script lang="ts">
	import { game } from "$lib/views/game/state/game.svelte";
	import type { Props } from "./types";
	import { BACKSPACE_KEY } from "../../data";
	import Button from "$lib/components/button/button.svelte";
	import { getStatus } from "$lib/views/game/state/utils/getStatus";
   
   const {key,keydown} :Props=$props()
 let {addLetter,removeLetter,enterWord}=game
 const isAction=key==='Enter'||key===BACKSPACE_KEY
 const isDelete=key===BACKSPACE_KEY?true:false
const isEnter=key==='Enter'?true:false
 const type= isAction?'action':'char'
 const status=isAction?'none':game.letterMap[key]

 function clickHandler(){
	!isAction? addLetter(key):isDelete?removeLetter():isEnter?enterWord():null
 }
</script>

{#key game.letterMap[key]}
<Button  onClick={clickHandler} overrideClass="{getStatus(isAction?'none':game.letterMap[key],'bg-slate-200')} h-[3rem] {keydown===key?'scale-125':!keydown?`hover:scale-125`:''} {keydown===key&&status==='none'?'bg-slate-300':!keydown&&status==='none'?'hover:bg-slate-300':''} p-3 text-md flex items-center justify-center self-end rounded-md  {type==='action'?'w-[2.5rem] sm:w-[7rem]':'w-[1.7rem] sm:w-[3rem]'} ">
    {key}
</Button>
{/key}


