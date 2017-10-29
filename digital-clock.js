let timer = 0;
let diodes = [];
window.onload = () => {
  diodes = document.getElementsByClassName("diode-wrapper")
  setInterval(() => {
    timer++

  }, 1000)
  $( "div.diode" ).toggleClass( "on" )
};

function refreshDigits(){
  segments = $("div.segment")
  let segments = [];  
} 