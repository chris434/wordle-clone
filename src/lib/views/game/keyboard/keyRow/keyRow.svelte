<script lang="ts">
	import { KEYBOARD_KEYS } from "../data";
	import Key from "./key/key.svelte";
	import type { Props } from "./types";
    const {index,keydown}:Props=$props()
</script>
<div class="flex space-x-2 space-y-2 items-center justify-center">
{#each KEYBOARD_KEYS[index] as row }
    <Key {keydown} {...row}/>
{/each}
</div>

