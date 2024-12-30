<script lang="ts">
	import LetterBox from "./letterBox/letterBox.svelte";
	import type { Props } from "./types";
    const {attampt,isAttempt}:Props=$props()

</script>
<div class="flex space-x-3">
 {#each attampt as attamptItem ,index}

 <LetterBox {isAttempt}  {...attamptItem} {index}/>

   
{/each}
</div>
