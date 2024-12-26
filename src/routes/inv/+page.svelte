<script>
	let labubuInv = ['white', 'macaroon'];
	let labubus = [
		{
			title: 'white',
			imgPath: '/favicon.png'
		},
		{
			title: 'red',
			imgPath: '/favicon.png'
		}
	];
</script>

{#each labubus as labubu}
    <div class={`w-96 h-96 rounded border shadow p-4 ${labubuInv.includes(labubu.title) ? "hover:bg-red-500" : ""}`}>
        <img src={labubu.imgPath} class={`${labubuInv.includes(labubu.title) ? "brightness-100" : "brightness-0"}`} alt="" srcset="">
        <p>{labubu.title}</p>
    </div>
{/each}