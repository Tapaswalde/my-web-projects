const generate=document.getElementById("generate");
const setup=document.getElementById("jokes");
const punchline=document.getElementById("punchline");
const url="https://official-joke-api.appspot.com/random_joke";
const options={
    method:"GET"
};
generate.addEventListener("click",function(){
    fetch(url,options)
    .then(function(response){
        return response.json();
    })
    .then(function(jsonData){
        setup.innerText=jsonData.setup;
        punchline.innerText=jsonData.punchline;
    })
})