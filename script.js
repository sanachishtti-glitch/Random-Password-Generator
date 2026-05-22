// project:7
let renderbtn7 = document.getElementById("renderbtn7");
let showcode7 = document.getElementById("showcode7");
let copybtn7 =document.getElementById("copybtn7");

let cLetters = document.getElementById("cLetters");
let sLetters = document.getElementById("sLetters");
let nLetters = document.getElementById("nLetters");
let oLetters= document.getElementById("oLetters");
let lengthInput = document.getElementById("lengthInput");

renderbtn7.addEventListener("click", () => {

  let length7 = parseInt(lengthInput.value) || 2; 
  let everyresult7 = ""; 

  if (cLetters.checked) {
    everyresult7 += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }

  if (sLetters.checked) {
    everyresult7 += "abcdefghijklmnopqrstuvwxyz";
  }

  if (nLetters.checked) {
    everyresult7 += "0123456789";
  }

  if (oLetters.checked) {
    everyresult7 += "-+=?/><.,|\\{}[]()*@!#$%^&`~";
  }

  if (everyresult7 === "") {
    showcode7.value = "Please select at least one option!";
    return;
  }

  let result7 = "";

  for (let i = 0; i < length7; i++) {
    let result77 = Math.floor(Math.random() * everyresult7.length);
    result7 += everyresult7[result77]; // ✅ FIXED
  }

  showcode7.value = result7;
});


copybtn7.addEventListener("click",async()=>{
 try{ 

   await navigator.clipboard.writeText(showcode7.value);
   copybtn7.textContent="Copied";

setTimeout(()=>{
copybtn7.textContent="Copy";

},1500)

}catch(err){
  
  
  console.log("Kuch galat hua:",err);
  
  
}
})
  