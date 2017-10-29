let timer = 0;
let diodes = [];
window.onload = () => {
  diodes = document.getElementsByClassName("diode-wrapper")
  _refreshDiods()
  // setInterval(() => {
  //   timer++
  //  _refreshDiods()
  // }, 1000)

};

function onNumberInput(e){
  const value = $('#decimal-input')[0].value
  timer = value;
  _refreshDiods()
}

function refreshDigits(){
  segments = $("div.segment")
  let segments = [];
  Array.from(segments).forEach(function(segment, i){
    $(segments[i].getElementsByClassName('segment')[0]).removeClass( "on" )
  }, this);
  if ($(segments)[0]) {
    
  }
}

function _refreshDiods() {
  Array.from(diodes).forEach(function(diode, i) {
    $(diodes[i].getElementsByClassName('diode')[0]).removeClass( "on" )
  }, this);
  if(timer >= 8){
    $(diodes[3].getElementsByClassName('diode')[0]).toggleClass( "on" )
    timer -= 8;
  } 
  if(timer >= 4){
    $(diodes[2].getElementsByClassName('diode')[0]).toggleClass( "on" )
    timer -= 4;
  } 
  if(timer >= 2){
    $(diodes[1].getElementsByClassName('diode')[0]).toggleClass( "on" )
  } if(timer % 2){
    $(diodes[0].getElementsByClassName('diode')[0]).toggleClass( "on" )
  } 
}