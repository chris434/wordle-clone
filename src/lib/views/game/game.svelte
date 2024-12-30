<script lang="ts">
	import Popup from "$lib/components/popup/popup.svelte";
    import Button from "$lib/components/button/button.svelte";
    import Keyboard from "$lib/views/game/keyboard/keyboard.svelte";
	import LetterGrid from "$lib/views/game/letterGrid/letterGrid.svelte";
	import { game } from "$lib/views/game/state/game.svelte";
const {closePopup,resetGame}=game
const buttonTitle="New game"
const popupOpen=game.result?.popupOpen
</script>
<div class="h-full relative flex flex-col items-center justify-center ">
<div class=" {popupOpen?"opacity-25":''}">
    <Button className="absolute top-5 right-5 {popupOpen?'pointer-events-none':''}" onClick={resetGame}>{buttonTitle}</Button>
<main class=" {game.result?'pointer-events-none':''}  relative flex flex-col space-y-5 items-center justify-center">
    <h1 class="text-center text-3xl">Word Gusse</h1>
    <LetterGrid/>
    <Keyboard/>
</main>
</div>
<Popup {buttonTitle} open={game.result?.popupOpen} title={game.result?.title} subtitle={game.result?.score} headerTitle={game.result?.headerTitle} headerStatus={game.result?.headerStatus} actionClick={resetGame} closeClick={closePopup} />
</div>
