<script>
	import { keyDownHander, keyPressHandler } from "./hadlers/key";
	import KeyRow from "./keyRow/keyRow.svelte";
	let keydown=$state({value:''})

</script>
<section class="w-full flex flex-col items-center">
{#each {length:3} as _,index}
<KeyRow keydown={keydown.value} {index}/>
{/each}
</section>

<svelte:document on:keydown={e=>keyDownHander(e,(key)=>keydown.value=key)} on:keyup={e=>{
	keyPressHandler(e)
	keydown.value=''
}}/>