randomNumber1=Math.floor(Math.random()*6)+1;
document.querySelector(".img1").setAttribute("src", `/images/dice${randomNumber1}.png`);
randomNumber2=Math.floor(Math.random()*6)+1;
document.querySelector(".img2").setAttribute("src", `/images/dice${randomNumber2}.png`);
if(randomNumber1>randomNumber2){
  document.querySelector("h1").textContent="Player 1 wins ";
}
if(randomNumber2>randomNumber1){
 
    document.querySelector("h1").textContent="Player 2 wins ";
  
}
if(randomNumber1===randomNumber2){
 
    document.querySelector("h1").textContent="Draw ";
  
}