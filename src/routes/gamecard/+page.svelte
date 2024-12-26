<script>
	import SingleCard from '$lib/SingleCard.svelte';

	let imgCover =
		'https://raw.githubusercontent.com/iamshaunjp/React-Firebase/lesson-58/magic-memory/public/img/cover.png';
	let imgPhu =
		'PPHU.svg';
	let imgAi=
		'Ai.svg';
	let imgDof =
		'dof.svg';
	let imgPetong =
		'Petong.svg';
	let imgPong =
		'pong.svg';
	let imgNoon =
		'noon.svg';
	const cardImages = [
		{ src: imgPhu, matched: false },
		{ src: imgAi, matched: false },
		{ src: imgDof, matched: false },
		{ src: imgPetong, matched: false },
		{ src: imgPong, matched: false },
		{ src: imgNoon, matched: false }
	];

	let cards = [];
	let turns = 0;
	let choiceOne = null;
	let choiceTwo = null;
	let disabled = false;
	let coin = 0;

	// shuffle cards
	const shuffledCards = () => {
		const shuffledCards = [...cardImages, ...cardImages]
			.sort(() => Math.random() - 0.5)
			.map((card) => ({ ...card, id: Math.random() }));
		cards = shuffledCards;
		turns = 0;
	};

	// 	handle a choice
	const handleChoice = (card) => {
		choiceOne ? (choiceTwo = card) : (choiceOne = card);
	};

	// 	compare 2 selected cards
	$: if (choiceOne && choiceTwo) {
		disabled = true;
		if (choiceOne.src === choiceTwo.src) {
			console.log('those cards match');
			cards = cards.map((card) => {
				if (card.src === choiceOne.src) {
					coin += 5
					return { ...card, matched: true };
				} else {
					return card;
				}
			});
			resetTurn();
		} else {
			console.log('those cards do not match');
			setTimeout(() => resetTurn(), 1000);
		}
	}

	$: console.log(cards);

	// 	start a game automatically
	$: shuffledCards();

	// reset choices & increase turn
	const resetTurn = () => {
		choiceOne = null;
		choiceTwo = null;
		turns = turns + 1;
		disabled = false;
	};
</script>

<div class="absolute z-50 m-3 top-[10%]">
	<a href="/gamecard">
		<img src="/MenuStar1.png" alt="" />
	</a>
	<a href="../home">
		<div class="mt-10">
			<img src="/MenuStar2.png" alt="" />
		</div>
	</a>
</div>
<div class="App">
    <div class="flex bg-[#FFE9D2] rounded-[50px] w-[206px] h-[68px] justify-start items-center left-2 absolute" name="container_coin">
        <img src="Star7.svg" class="py-2 px-2" alt="star7">
        <p class="text-[40px] ml-4 text-[#300E07] font-baloo font-bold">{coin}</p>
	</div>
	<button on:click={shuffledCards} class="border py-[6px] px-[12px] rounded-md font-bold cursor-pointer text-2xl bg-[#FFD0C8] border-white"> New Game </button>
	<div class="flex justify-center items-center">
		<div class="card-grid">
			{#each cards as card (card.id)}
				<SingleCard
					{card}
					{imgCover}
					{disabled}
					{handleChoice}
					flipped={card === choiceOne || card === choiceTwo || card.matched}
				/>
			{/each}
		</div>
	</div>
	<!-- <p>
		Turns: {turns}
	</p> -->
</div>

<style>
	.App {
		max-width: 860px;
		margin: 0 auto;
		min-height: 100vh;
		text-align: center;
		padding: 1rem;
		color: white;
	}
	button:hover {
		background: #c23866;
		color: #fff;
	}
	.card-grid {
		margin-top: 40px;
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		grid-gap: 20px;
	}
</style>

<!-- <script>
	import Card from '../../lib/card.svelte';
	import { onMount } from 'svelte';
	let cards = [];
	let deck = [
		{
			image: '',
			name: 'chili',
			open: false,
			lock: false
		},
		{
			image: '',
			name: 'grapes',
			open: false,
			lock: false
		},
		{
			image: '',
			name: 'lemon',
			open: false,
			lock: false
		},
		{
			image: '',
			name: 'orange',
			open: false,
			lock: false
		},
		{
			image: '',
			name: 'pineapple',
			open: false,
			lock: false
		},
		{
			image: '',
			name: 'strawberry',
			open: false,
			lock: false
		}
	];
	$: if (firstCard && secondCard) {
		if (firstCard.name == secondCard.name) {
			console.log('Match');
            firstCard.lock = true;
            firstCard = null;
            secondCard = null;
		} else {
			console.log('Not Match');
			setTimeout(() => {
                firstCard = null;
                secondCard = null;
				clearCard();
			}, 2000);
		}
	}

	function clearCard() {
		cards = cards.map((card) => {
			if (card.lock) {
				return card;
			}
			if (card.open) {
				return {
					...card,
					open: false
				};
			} else {
				return card;
			}
		});
	}

	function shuffleCards() {
		let currentIndex = cards.length,
			randomIndex,
			temporaryValue;
		while (currentIndex !== 0) {
			randomIndex = Math.floor(Math.random() * currentIndex);
			currentIndex -= 1;
			temporaryValue = cards[currentIndex];
			cards[currentIndex] = cards[randomIndex];
			cards[randomIndex] = { ...temporaryValue };
		}
	}
	let firstCard, secondCard;
	cards = [...deck, ...deck];
	shuffleCards();
	console.log(cards);
</script>

<div class="grid grid-cols-4 gap-4">
	{#each cards as card, index (index)}
		<Card
			value={card.name}
			check={card.open}
			onClick={() => {
				card.open = true;
				if (!firstCard) {
					firstCard = card;
				} else {
					secondCard = card;
				}
				console.log(firstCard, secondCard);
			}}
		/>
	{/each}
</div> -->
