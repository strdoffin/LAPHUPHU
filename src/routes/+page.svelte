<script>
    import data from '../data/data.json'
    import { onMount } from 'svelte';
    let number;
    let dataTitle = ''
    let dataDes = ''
    let dataImg = '';
    let labubuInv = [];
    let labubu = [{
        title:"PPHU",
        description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry.", 
        imgPath:"/PPHU.svg"
    },
    {
        title:"AI",
        description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry.", 
        imgPath:"/Ai.svg"
    },
    {
        title:"PONG",
        description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry.", 
        imgPath:"/pong.svg"
    },
    {
        title:"DOF",
        description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry.", 
        imgPath:"/dof.svg"
    },
    {
        title:"PETONG",
        description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry.", 
        imgPath:"/Petong.svg"
    },
    {
        title:"NOON",
        description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry.", 
        imgPath:"/noon.svg"
    },
    
]
onMount(()=>{
    labubuInv = JSON.parse(localStorage.getItem("inv")) || []
})
 

const rand = () =>{
    number =  Math.floor(Math.random() * 10) + 1;
    dataTitle = data[number].title
    labubu.forEach(item => {
        if(item.title == dataTitle){
            dataDes = item.description
            dataImg = item.imgPath
        }
    });
    if(!labubuInv.includes(dataTitle)){
        labubuInv.push(dataTitle)
        localStorage.setItem('inv',JSON.stringify(labubuInv))
    }   
}

</script>

<main>
    <div>
        <h1>{number}</h1>
    </div>
    <div class="justify-center flex">
        <button on:click={rand} class="text-center bg-gray-500">Random</button>
    </div>
    <!-- {JSON.stringify(labubu)} -->
    <div>
        <hi>{dataTitle}</hi>
        <p>{dataDes}</p>
        <img src={dataImg} alt="img" srcset="">
    </div>
</main>
