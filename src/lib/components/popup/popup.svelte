<script lang="ts">
	import Button from "../button/button.svelte";
import type { Props } from "./types";

    let {headerTitle,title,buttonTitle,subtitle,headerStatus,open,closeClick,actionClick}:Props=$props()
</script>

{#if open}
<section style="transform: translate(-50%,-50%);" class=" text-center  shadow-lg rounded-xl bg-white absolute z-20 left-[50%] w-10/12 sm:w-4/12 ">
    <div class="{headerStatus==='ok'?'bg-green-400':headerStatus==='bad'?'bg-red-400':''} w-full p-3 rounded-tl-xl rounded-tr-xl font-bold text-white">
            <div>{headerTitle}</div>
            <button onclick={closeClick} class="absolute top-2 hover:scale-125 right-3 text-2xl">✕</button>
    </div>
    <div class="p-3 flex flex-col items-center justify-between space-y-5 mt-3">
        <h2 class="text-2xl">{title}</h2>
        <div>{subtitle}</div>
        <Button onClick={actionClick} >{buttonTitle}</Button>
    </div>
</section>
{/if}
