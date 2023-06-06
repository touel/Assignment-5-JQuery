var today = dayjs();
var time = new Date();
var hours = time.getHours();
var saveButton = document.getElementById("save");
var taskInput = document.querySelector("#description");

console.log (hours);


function timeColors() {
    var timeSlot = document.querySelectorAll(".future");
    var timeSlotArr = Array.from(timeSlot);
    var idTime = timeSlotArr.id

    console.log (idTime);
    console.log (timeSlotArr);

	for (var i = 0; i < timeSlot.length; i++) 
    {
        var idTime = timeSlotArr[i].id;

	  console.log('timeSlots: ', timeSlotArr[i]);
      if (idTime < hours) {
        console.log ('yes');
        document.getElementById(idTime).className = "row time-block past";
      } else if (idTime == hours) {
        console.log ('maybe');
        document.getElementById(idTime).className = "row time-block present"
      }
      else {
        console.log ('no')
      }
}}


function saveLastTasks() {
    var tasks = {
        
    }
}

function renderLastTasks() {
    var lastTasks = JSON.parse(localStorage.getItem("#description"));

    if (lastTasks !== null){

    } else {
    return;
    }

    task.textContent = task;
    
};

document.addEventListener("click", function(event){
event.preventDefault();
  saveLastTasks();  
  renderLastTasks();
})

function init() {
    renderLastTasks();
    timeColors();
    $('#currentDay').text(today.format('MMM D, YYYY'));
}

init();