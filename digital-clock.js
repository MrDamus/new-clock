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

function convertTime(time) {
  var hours   = Math.floor(time / 3600)
  var minutes = Math.floor((time - (hours * 3600)) / 60)
  var seconds = time - (hours * 3600) - (minutes * 60)
  var hoursString = hours.toString().split("").reverse();
  var minutesString = minutes.toString().split("").reverse();
  var secondsString = seconds.toString().split("").reverse();
  return [
    hoursString[0],
    hoursString[1] || -1,
    minutesString[0],
    minutesString[1] || -1,
    secondsString[0],
    secondsString[1] || -1
  ];
}

function updateBoard(time){
  _refreshDiods()
  _refreshDigits()
  
  const timeString = convertTime(time);
  
  // console.log(timeString)
  _displayDigit(timeString[5], 'seconds-10')
  _displayDigit(timeString[4], 'seconds-1')
  _displayDigit(timeString[3], 'minutes-10')
  _displayDigit(timeString[2], 'minutes-1')
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

function _displayDigit(timeValue, digitId){
  digit = $(document.getElementsByClassName("digit"))
  if (timeValue == 0 ) {
    $(`#${digitId} > #top`).addClass( "on" )&&
    $(`#${digitId} > #topRight`).addClass( "on" )&&
    $(`#${digitId} > #topLeft`).addClass( "on" )&&    
    $(`#${digitId} > #botLeft`).addClass( "on" )&&
    $(`#${digitId} > #bot`).addClass( "on" )&&
    $(`#${digitId} > #botRight`).addClass( "on" )
  }  
  else if(timeValue == 1) {
    $(`#${digitId} > #topRight`).addClass( "on" )&&
    $(`#${digitId} > #botRight`).addClass( "on" )
  } else if (timeValue == 2) {
    $(`#${digitId} > #top`).addClass( "on" )&&
    $(`#${digitId} > #topRight`).addClass( "on" )&&
    $(`#${digitId} > #middle`).addClass( "on" )&&
    $(`#${digitId} > #botLeft`).addClass( "on" )&&
    $(`#${digitId} > #bot`).addClass( "on" )
  } else if (timeValue == 3) {
    $(`#${digitId} > #top`).addClass( "on" )&&
    $(`#${digitId} > #topRight`).addClass( "on" )&&
    $(`#${digitId} > #middle`).addClass( "on" )&&
    $(`#${digitId} > #botRight`).addClass( "on" )&&
    $(`#${digitId} > #bot`).addClass( "on" )
  } else if (timeValue == 4) {
    $(`#${digitId} > #topLeft`).addClass( "on" )&&
    $(`#${digitId} > #topRight`).addClass( "on" )&&
    $(`#${digitId} > #middle`).addClass( "on" )&&
    $(`#${digitId} > #botRight`).addClass( "on" )
  } else if (timeValue == 5) {
    $(`#${digitId} > #top`).addClass( "on" )&&
    $(`#${digitId} > #topLeft`).addClass( "on" )&&
    $(`#${digitId} > #middle`).addClass( "on" )&&
    $(`#${digitId} > #botRight`).addClass( "on" )&&
    $(`#${digitId} > #bot`).addClass( "on" )
  } else if (timeValue == 6) {
    $(`#${digitId} > #top`).addClass( "on" )&&
    $(`#${digitId} > #topLeft`).addClass( "on" )&&
    $(`#${digitId} > #middle`).addClass( "on" )&&
    $(`#${digitId} > #botRight`).addClass( "on" )&&
    $(`#${digitId} > #bot`).addClass( "on" ) &&
    $(`#${digitId} > #botLeft`).addClass( "on" )
  } else if (timeValue == 7) {
    $(`#${digitId} > #top`).addClass( "on" )&&
    $(`#${digitId} > #topRight`).addClassw( "on" )&&
    $(`#${digitId} > #botRight`).addClass( "on" )
  } else if (timeValue == 8) {
    $(`#${digitId} > #top`).addClass( "on" )&&
    $(`#${digitId} > #topLeft`).addClass( "on" )&&
    $(`#${digitId} > #topRight`).addClass( "on" )&&
    $(`#${digitId} > #middle`).addClass( "on" )&&
    $(`#${digitId} > #botRight`).addClass( "on" )&&
    $(`#${digitId} > #bot`).addClass( "on" ) &&
    $(`#${digitId} > #botLeft`).addClass( "on" )
  } else if (timeValue == 9) {
    $(`#${digitId} > #top`).addClass( "on" )&&
    $(`#${digitId} > #topLeft`).addClass( "on" )&&
    $(`#${digitId} > #topRight`).addClass( "on" )&&
    $(`#${digitId} > #middle`).addClass( "on" )&&
    $(`#${digitId} > #botRight`).addClass( "on" )&&
    $(`#${digitId} > #bot`).addClass( "on" )
  }
}