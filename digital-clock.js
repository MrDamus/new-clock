let timer = 0;
let diodes = [];
let digit = 0;
let segments = [];
let interval;
window.onload = () => {
  diodes = document.getElementsByClassName("diode-wrapper")
  _refreshDiods()
  _refreshDigits()
  interval = setInterval(() => {
    timer++
    updateBoard(timer)
  }, 1000)
};

function toggleTimer (){
  if(interval != null) {
    clearInterval(interval)
    interval = null
  } else {
    interval = setInterval(() => {
      timer++
      updateBoard(timer)
    }, 1000)
  }
}

function updateBoard(time){
  _refreshDiods()
  _refreshDigits()
  _displayDigit(time)
}

function onNumberInput(e){
  const value = $('#decimal-input')[0].value
  updateBoard(value)
}

function _refreshDigits(){
  segments = $("div.segment")
  Array.from(segments).forEach(function(segment, i){
    $(segment).removeClass( "on" )
  }, this);
  // if ($(segments)[0]) {
    
  // }
}

function _refreshDiods() {
  let timeValue = timer
  Array.from(diodes).forEach(function(diode, i) {
    $(diodes[i].getElementsByClassName('diode')[0]).removeClass( "on" )
  }, this);
  if(timeValue >= 8){
    $(diodes[3].getElementsByClassName('diode')[0]).addClass( "on" )
    timeValue -= 8;
  } 
  if(timeValue >= 4){
    $(diodes[2].getElementsByClassName('diode')[0]).addClass( "on" )
    timeValue -= 4;
  } 
  if(timeValue >= 2){
    $(diodes[1].getElementsByClassName('diode')[0]).addClass( "on" )
  } if(timeValue % 2){
    $(diodes[0].getElementsByClassName('diode')[0]).addClass( "on" )
  }
}

function _displayDigit(timeValue){
  digit = $(document.getElementsByClassName("digit"))
  if(timeValue == 1) {
    $('#topRight').addClass( "on" )&&
    $('#botRight').addClass( "on" )
  } else if (timeValue == 2) {
    $('#top').addClass( "on" )&&
    $('#topRight').addClass( "on" )&&
    $('#middle').addClass( "on" )&&
    $('#botLeft').addClass( "on" )&&
    $('#bot').addClass( "on" )
  } else if (timeValue == 3) {
    $('#top').addClass( "on" )&&
    $('#topRight').addClass( "on" )&&
    $('#middle').addClass( "on" )&&
    $('#botRight').addClass( "on" )&&
    $('#bot').addClass( "on" )
  } else if (timeValue == 4) {
    $('#topLeft').addClass( "on" )&&
    $('#topRight').addClass( "on" )&&
    $('#middle').addClass( "on" )&&
    $('#botRight').addClass( "on" )
  } else if (timeValue == 5) {
    $('#top').addClass( "on" )&&
    $('#topLeft').addClass( "on" )&&
    $('#middle').addClass( "on" )&&
    $('#botRight').addClass( "on" )&&
    $('#bot').addClass( "on" )
  } else if (timeValue == 6) {
    $('#top').addClass( "on" )&&
    $('#topLeft').addClass( "on" )&&
    $('#middle').addClass( "on" )&&
    $('#botRight').addClass( "on" )&&
    $('#bot').addClass( "on" ) &&
    $('#botLeft').addClass( "on" )
  } else if (timeValue == 7) {
    $('#top').addClass( "on" )&&
    $('#topRight').addClass( "on" )&&
    $('#botRight').addClass( "on" )
  } else if (timeValue == 8) {
    $('#top').addClass( "on" )&&
    $('#topLeft').addClass( "on" )&&
    $('#topRight').addClass( "on" )&&
    $('#middle').addClass( "on" )&&
    $('#botRight').addClass( "on" )&&
    $('#bot').addClass( "on" ) &&
    $('#botLeft').addClass( "on" )
  } else if (timeValue == 9) {
    $('#top').addClass( "on" )&&
    $('#topLeft').addClass( "on" )&&
    $('#topRight').addClass( "on" )&&
    $('#middle').addClass( "on" )&&
    $('#botRight').addClass( "on" )&&
    $('#bot').addClass( "on" )
  }
}