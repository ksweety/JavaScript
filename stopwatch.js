let seconds = 0
let milliseconds = 0
let minutes = 0 
let digits = document.getElementById("digits") 
let startButton = document.getElementById('start-btn') 
let stopButton = document.getElementById('stop-btn')
let lapButton = document.getElementById('laplist')



function start () {   
    startButton.disabled = true 
    stopButton.disabled = false
    lapButton.disabled = false


   interval = setInterval(function () {
        milliseconds = milliseconds +10 
        if (milliseconds >= 1000) {
        seconds = seconds + 1 
        milliseconds = 0
    }
    if(seconds>=60){
        minutes = minutes +1
        seconds = 0
    }
    digits.innerHTML = String(minutes).padStart(2, "0") + ":" + String(seconds).padStart(2, "0") + ":" + milliseconds /10
    }, 10)
} 
function stop () {
    clearInterval(interval) 
    startButton.disabled = false 
    stopButton.disabled = true 
    lapButton.disabled = true
}

function reset () {
stop() 
milliseconds=0 
seconds= 0 
minutes = 0 
digits.innerHTML= "00:00:00"
const laplist = document.getElementById("lapList1")
laplist.innerHTML = "" 
lapButton.disabled = true

}

function addlap(){ 
    
    let newListItem = document.createElement("li") 
    newListItem.textContent = digits.textContent 
    const laplist = document.getElementById("lapList1")   
    laplist.appendChild(newListItem)
}

