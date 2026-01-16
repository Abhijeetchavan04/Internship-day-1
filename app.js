let url = "https://catfact.ninja/fact";
let url2 ="https://dog.ceo/api/breeds/image/random";

let btn = document.querySelector("button");


btn.addEventListener("click",async()=>{
    let output = await getImg();
    console.log(output);
    let img = document.querySelector("#result");
    img.setAttribute("src",output);
})

async function getImg() {
    try{
        let res = await axios.get(url2);
        return(res.data.message);
    }
    catch(e){
        console.log("error = ",e)

    }
}

// btn.addEventListener("click",async()=>{
//     let output = await getFact();
//     console.log(output);
//     let p = document.querySelector("#result");
//     p.innerText = output;
// })

// async function getFact() {
//     try{
//         let res = await axios.get(url);
//         return(res.data.fact);
//     }
//     catch(e){
//         console.log("error = ",e)

//     }
// }
