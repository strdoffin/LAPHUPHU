<script>
	export let card;
	// export let backcard;
	export let handleChoice;
	export let flipped;
	export let disabled;

	const handleClick = () => {
		if (!disabled) {
			handleChoice(card);
		}
	};
</script>

<div class="card">
	<div class:flipped>
		<img src={card.src} class="front w-full h-[250px]" alt="card front" />
		<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<img src="backcard.svg" class="back" on:click={handleClick} alt="card back" />
	</div>
</div>
<style>
	.card {
		position: relative;
	}
	.card img {
		width: 100%;
		display: block;
		border-radius: 6px;
	}
	
	/* front of card - the picture 	 */
	.card .front {
		transform: rotateY(90deg);
		transition: all ease-in 0.2s;
		position: absolute;
	}
	.flipped .front {
		transform: rotateY(0deg);
		transition-delay: 0.2s;
	}
	
	/* back of card - cover	 */
	.card .back {
		transition: all ease-in 0.2s;
		transition-delay: 0.2s;
	}
	.flipped .back {
		transform: rotateY(90deg);
		transition-delay: 0s;
	}
</style>

<!-- <script>
	export let check = false;
    export let value = "";
    export let cardUrl = "/backcard.svg";
    export let onClick = () => {

    }
</script>

<button
	on:click={() => {
        if (!check) {
            onClick();
        }
	}}
>
	<div id="card" class=" flex h-[232px] w-[153px] items-center justify-center rounded-xl">
		{#if !check}
			<img src="/backcard.svg" class="" alt="" id="back" />
		{:else} -->
<!-- <img src="/backcard.svg" class="blur" alt="" id="front" /> -->
<!-- <div class="w-full h-full bg-slate-200">
                {value}
            </div>
		{/if}
	</div>
</button> -->