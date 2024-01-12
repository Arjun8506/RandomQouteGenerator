let animename = document.querySelector("#animename")
let Generatebtn = document.querySelector("#Generatebtn")
let charactername = document.querySelector("#charactername")
let qoutedes = document.querySelector("#qoutedes")
let showdata = document.querySelector("#showdata")

async function generateqoute(){
    let generatedqoute = await fetch(`https://animechan.xyz/api/random`).then(res => res.json()) 
    if (generatedqoute.anime ===`404`) {
        console.log("error");
    }else{
        showdata.style.display = "flex"
        animename.innerHTML = generatedqoute.anime;
        charactername.innerHTML = generatedqoute.character
        qoutedes.innerHTML = generatedqoute.quote
    }
}

Generatebtn.addEventListener("click", ()=>{
    generateqoute()
})