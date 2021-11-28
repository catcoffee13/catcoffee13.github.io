const clock = document.querySelector("#clock");

function changeClock(clock) {
    return String(parseInt(clock)).padStart(2, "0");
  }

function time(){
    const date = new Date();
    clock.innerText = `${changeClock(date.getHours())}:${changeClock(date.getMinutes())}`;   

}


setInterval(time,1000);