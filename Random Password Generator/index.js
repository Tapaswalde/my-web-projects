const passwordBox=document.getElementById("password");
const generateBtn=document.querySelector(".generate-button");
const copyBtn=document.getElementById("copyBtn");

const upperCase="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase="abcdefghijklmnopqrstuvwxyz";
const numbers="0123456789";
const symbols="!@#$%^&*()_+~`|}{[]:;?><,./-=";

let result='';

generateBtn.addEventListener("click",()=>{
    passwordBox.value="";
    const allChars=upperCase+lowerCase+numbers+symbols;
    const passwordLength=12;
    for(let i=0;i<passwordLength;i++){
        const randomIndex=Math.floor(Math.random()*allChars.length);
        result+=allChars[randomIndex];
    }
    passwordBox.value=result;
    result='';
});

copyBtn.addEventListener("click",()=>{
    if(passwordBox.value===""){
        alert("No password to copy!");
    }else{
        navigator.clipboard.writeText(result);
        alert("Password copied to clipboard!");
    }
})