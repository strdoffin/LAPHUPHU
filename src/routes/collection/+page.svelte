<script>
	import Popupcol from '../../lib/popupcol.svelte';
	let showDes = {
		isShow: false,
		title: null
	};
	const hide = () => {
		showDes = { isShow: false, title: null };
	};
	let dataClick;
	const showCard = (title) => {
		showDes = { isShow: true, title };
	};

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
			description: 'เราจะเห็นความดีในตัวคนอื่นในเวลาสมควรเอง เฉกเช่นเห็นคนดำในยามสว่าง (⁠｡⁠•̀⁠ᴗ⁠-⁠)⁠✧ 🧡.',
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

	let haveLaphuphu = true;
	// let haveLaphuphu = false

	// console.log(labubu)
</script>

{#if showDes.isShow}
	<div
		id="overlay"
		class=" absolute inset-0 z-50 flex h-screen w-full items-center justify-center bg-black/30"
	>
		<div class="relative flex items-center justify-center">
			<button on:click={hide} class="absolute -right-[520px] top-48 z-30"
				><img src="/MenuStar1.png" alt="" /></button
			>
			<div class="absolute -left-56 h-[486px] w-[713px] rounded-2xl bg-red-500 p-4">
				<div class="h-full w-full rounded-2xl bg-white p-4">
					<h1 class=" text-3xl font-semibold">Title : {showDes.title}</h1>
					<h1 class=" text-2xl">Description : {labubu.find((item) => item.title === showDes.title).description}</h1>
					<p></p>
				</div>
			</div>
			<div
				class="absolute right-[220px] z-20 flex h-[486px] w-[363px] items-center justify-center rounded-2xl bg-black/40 backdrop-blur-sm"
			>
				<img
					src={labubu.find((item) => item.title === showDes.title).imgPath}
					alt="labubu"
					class="bg-transparent"
				/>
			</div>
		</div>
	</div>
{/if}

<main class="h-[100vh]">
	<div class="absolute z-50 m-3">
		<a href="/gamecard">
			<img src="/MenuStar1.png" alt="" />
		</a>
		<a href="../collection">
			<div class="mt-10">
				<img src="/MenuStar2.png" alt="" />
			</div>
		</a>
	</div>
	<div class="grid grid-cols-3 gap-24 p-[7%]">
		{#each labubu as item}
			<button key={item.title} class="flex-center" on:click={() => showCard(item.title)}>
				<div
					class="flex-center animebox relative h-[244px] w-[255px] cursor-pointer rounded-3xl bg-[#FFE4DF]"
				>
					<div class="relative h-[300px] w-[200px] shadow"></div>
					{#if !haveLaphuphu}
						<img class="z-10 h-[200px] w-full brightness-[.03]" src={item.imgPath} alt="star" />
					{:else}
						<img class="z-10 h-[200px] w-full" src={item.imgPath} alt="star" />
						<img class="absolute z-0" src="/newitem.png" alt="" />
					{/if}
				</div>
			</button>
		{/each}
	</div>
</main>

<style lang="postcss">
	.flex-center {
		@apply flex items-center justify-center;
	}
	.shadow {
		@apply absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform rounded-full bg-gradient-to-r from-white blur-[70px];
	}
	.animebox:hover {
		animation: shaking infinite 2s;
	}
	.animestar:hover {
		animation: zoomin-out infinite 1s;
	}
	@keyframes shaking {
		0% {
			transform: rotate(0deg);
		}
		25% {
			transform: rotate(5deg);
		}
		50% {
			transform: rotate(-3deg);
		}
		75% {
			transform: rotate(5deg);
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

                           <!-- _
                        _ooOoo_
                       o8888888o
                       88" . "88
                       (| -_- |)
                       O\  =  /O
                    ____/`---'\____
                  .'  \\|     |//  `.
                 /  \\|||  :  |||//  \
                /  _||||| -:- |||||_  \
                |   | \\\  -  /'| |   | 
                | \_|  `\`---'//  |_/ |                        [         ]
                \  .-\__ `-. -'__/-.  /                        [         ]
              ___`. .'  /--.--\  `. .'___                      [         ]
           ."" '<  `.___\_<|>_/___.' _> \"".                   [        ]
          | | :  `- \`. ;`. _/; .'/ /  .' ; |                 [         ]
          \  \ `-.   \_\_`. _.'_/_/  -' _.' /                |          |
===========`-.`___`-.__\ \___  /__.-'_.'_.-'================/            \
                        `=--=-'                           /               \
					

						
					
					
					
					
					
-->