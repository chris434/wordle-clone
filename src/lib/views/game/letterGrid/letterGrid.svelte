<script>
	import MessageTag from "$lib/components/massageTag/messageTag.svelte";
	import { innerWidth } from "svelte/reactivity/window";
import LetterRow from "./letterRow/letterRow.svelte";
	import { game } from "$lib/views/game/state/game.svelte";

</script>
<section class=" w-full relative ">
 <MessageTag posision={typeof innerWidth.current==='number'&& innerWidth.current>=680?5:3.6} title={game.message.title} posisionMultiplier={(game.currentAttempt.value)+1-0.18*game.currentAttempt.value}/>
<div class="flex flex-col items-center space-y-3">

{#each game.attempts  as attampt,i }
    <LetterRow isAttempt={game.currentAttempt.value===i}  {attampt} />
{/each}
</div>
</section>
