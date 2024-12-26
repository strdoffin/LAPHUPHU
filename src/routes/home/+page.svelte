<script>
	let hideLaphuphu = true;
	import data from '../../data/data.json';
	import { onMount } from 'svelte';
	import { tweened } from 'svelte/motion';
	import { cubicOut } from 'svelte/easing';
	import { expoIn } from 'svelte/easing';
	
	const progress = tweened(0, {
		duration: 3000,
		easing: cubicOut
	});
	const loading = tweened(0, {
		duration: 500,
		delay: 0 ,
		easing: expoIn
	});
	loading.set(0)
	let number;
	let dataTitle = '';
	let dataDes = '';
	let dataImg = '';
	let labubuInv = [];
	let labubu = [
		{
			title: 'PPHU',
			description: 'พี่ภูฟ้าสุดตึงในดวงใจของน้องๆ มาด้วยคอลแลคชั่นสีรุ้งสุดจ๊าบหวานเจี๊ยบสมกับเป็นตัวซีเครตจบิงๆ.',
			imgPath: '/PPHU.svg'
		},
		{
			title: 'AI',
			description: 'โคตรตัวแม่ตัวมัมดีไซน์เนอร์แห่งค่ายHeartSite❤.',
			imgPath: '/Ai.svg'
		},
		{
			title: 'PONG',
			description: 'เราจะเห็นความดีในตัวคนอื่นในเวลาสมควรเอง เฉกเช่นเห็นคนดำในตอนสว่าง (⁠｡⁠•̀⁠ᴗ⁠-⁠)⁠✧ 🧡.',
			imgPath: '/pong.svg'
		},
		{
			title: 'DOF',
			description: 'บักต๊อบ wanna be backend .',
			imgPath: '/dof.svg'
		},
		{
			title: 'PETONG',
			description: 'แงโดนบังคับให้เขียน....',
			imgPath: '/Petong.svg'
		},
		{
			title: 'NOON',
			description: 'จิตกรอนาคตศิลปินอาร์ตทอยรวยยิ่งกว่า CryBaby ขายดีกว่า Labubu แต่สู้ LaPhuPhu ไม่ได้.',
			imgPath: '/noon.svg'
		}
	];
	const rand = () => {
		number = Math.floor(Math.random() * data.length) + 1;
		dataTitle = data[number].title;
		labubu.forEach((item) => {
			if (item.title == dataTitle) {
				dataDes = item.description;
				dataImg = item.imgPath;
			}
		});
		if (!labubuInv.includes(dataTitle)) {
			labubuInv.push(dataTitle);
			localStorage.setItem('inv', JSON.stringify(labubuInv));
		}
		progress.set(1);
	};
	onMount(() => {
		labubuInv = JSON.parse(localStorage.getItem('inv')) || [];
	});

	progress.subscribe((e) => {
		console.log(e);
	});
	const nextLabubu = () => {
		hideLaphuphu = true;
		progress.set(0);
	};
	loading.set(1)
</script>
<!-- <div class=" absolute  z-50 w-full h-[100vh] flex items-center justify-center bg-[#FFE4DF]">
	<div class="">
		<img src="/mainmenu.svg" alt="">
		<div class="w-full flex justify-center">
			<div class="relative ">
				<div class="absoulte   rounded-xl  py-2 w-[500px] bg-white"></div>
				<div class={`absolute top-0 rounded-xl  py-2 w-[500px]  bg-red-500`}></div>
			</div>
		</div>
	</div>
</div> -->
<main class="h-[100vh]">
	<div class="z-30 absolute m-3">
		<a href="/gamecard">
			<img src="/MenuStar1.png" alt="" />
		</a>
		<a href="../collection">
			<div class="mt-10">
				<img src="/MenuStar2.png" alt="" />
			</div>
		</a>
	</div>
	<div class="flex-center relative h-[100vh] duration-[1s]">
		<div class="z-0 h-[700px] w-[700px] shadow"></div>
		<div class="flex-center absolute z-10">
			<div class="absolute"><img src="/meniStar.png" alt="" /></div>
			<button
				on:click={() => {
					hideLaphuphu = false;
					rand();
				}}
				class="flex-center animebox absolute h-[370px] w-[386px] rounded-3xl bg-[#FFE4DF]"
			>
				<div class="h-[200px] w-[200px] shadow"></div>
				<img class="z-10" src="/Star2.png" alt="star" />
			</button>
		</div>
		{#if !hideLaphuphu}
			<div class=""></div>
			<button
				class="relative z-20 flex aspect-square w-[500px]"
				style={`opacity: ${$progress}; transform: scale(${$progress});`}
				on:click={nextLabubu}
			>
				<div>
					<img class="absolute z-20 h-[500px] w-[500px]" src="/newitem.png" alt="" />
					<img class="flex-center left-30 absolute z-30 w-full h-[450px]" src={dataImg} alt=""/>
				</div>
			</button>
		{/if}
	</div>
</main>

<style lang="postcss">
	.flex-center {
		@apply flex items-center justify-center;
	}
	.shadow {
		@apply absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform rounded-full bg-gradient-to-r from-white blur-[70px];
	}
	.animebox:hover,
	.animestar:hover {
		animation: shaking 1.3s infinite;
	}

	@keyframes shaking {
		0% {
			transform: rotate(0deg);
		}
		25% {
			transform: rotate(15deg);
		}
		50% {
			transform: rotate(-3deg);
		}
		75% {
			transform: rotate(15deg);
		}
		100% {
			transform: rotate(0deg);
		}
	}
	@keyframes zoomin-out {
		0% {
			transform: scale(1);
		}

		50% {
			transform: scale(10);
		}
		100% {
			transform: scale(1);
		}
	}
</style>
