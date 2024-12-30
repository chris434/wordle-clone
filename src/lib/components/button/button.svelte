<script lang="ts">
	import { fade } from "svelte/transition";
	import { blurButton } from "./target/blurButton";
	import type { Props } from "./types";

    const {className='',overrideClass='',children,onClick}:Props=$props()
</script>

<button in:fade={{duration:500}}  onclick={(e)=>blurButton(e,()=> onClick())} class="{overrideClass?overrideClass:"text-white p-3 hover:scale-110 bg-green-400 rounded-lg"} {className}">
{@render children()}
</button>