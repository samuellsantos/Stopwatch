var hour = document.querySelector(".clock .hours")
var minute = document.querySelector(".clock .minutes")
var second = document.querySelector(".clock .seconds")
var msecond = document.querySelector(".clock .milliseconds")
var h = m = s = ms =  0;




var start = document.getElementById('start')
start.addEventListener('click', startTime)
var pausar = document.getElementById('stop')
pausar.addEventListener('click', parar)
var restart = document.getElementById('restart')
restart.addEventListener('click', reiniciar)

var iniciar;
function startTime(){
    iniciar = setInterval(()=>{  
            ms++
            msecond.innerHTML = ms < 10 ? '0' + ms : ms   
        if(ms == 100){
            ms = 0;
            s++
            second.innerHTML = s < 10 ? '0' + s : s 
        }if(s == 60){
            s = 0
            m++
            minute.innerHTML = m < 10 ? '0' + m : m
        }if(m == 60){
            m = 0
            h++
            hour.innerHTML = h < 10 ? '0' + h : h
        }
        
    }, 10)
}
    


function parar() {
    clearInterval(iniciar)
}
function reiniciar(){
    h = m = s = ms = '0' + 0;
    hour.innerHTML = h
    minute.innerHTML = m
    second.innerHTML = s
    msecond.innerHTML = ms
}

