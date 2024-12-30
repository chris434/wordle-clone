<script lang="ts">
	import { fade } from "svelte/transition";
	import type { Props } from "./types";

    const {posisionMultiplier,posision,title}:Props=$props()
    console.log(posision)
</script>
{#if title}
<div  in:fade={{duration:700}} out:fade={{duration:700}} style="top:{posision*posisionMultiplier}rem;  transform: translate(-50%, -50%);" class=" bg-slate-900 text-white p-3 rounded-md text-xl absolute z-10 left-[50%]">
{title}
</div>
{/if}