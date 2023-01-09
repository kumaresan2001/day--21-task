const card_btn=document.querySelector(".card");

let url="https://api.thecatapi.com/v1/images/search"
let data=async()=>(await fetch(url)).json();

data().then((res)=>{
    let img=document.createElement("img");
    img.src=res[0].url;
    card_btn.appendChild(img);
})
.catch((err)=>{
    alert(err);
});

