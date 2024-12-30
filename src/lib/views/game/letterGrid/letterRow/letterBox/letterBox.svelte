<script lang="ts">
    import {getStatus}from '$lib/views/game/state/utils/getStatus'
	import { fade} from "svelte/transition";
	import type { Props } from "./types";
    const {letter,status,index,isAttempt}:Props=$props()

    let preStatus=$state({value:status})

    $effect(()=>{
        if(preStatus.value!==status)
        setTimeout(()=>{
         preStatus.value=status
        },200*index)
})
</script>

{#key preStatus.value}
<div in:fade={{duration:500}} class="{getStatus(preStatus.value,'bg-gray-50')} w-[3rem] sm:w-[3.35rem] h-[3rem] sm:h-[3.35rem] border-2 text-xl flex self-start items-center justify-center  {isAttempt?'border-gray-700':' border-gray-400'} rounded-md">{letter}</div>
{/key}



    


