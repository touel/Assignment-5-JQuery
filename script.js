var today = dayjs();
$('#currentDay').text(today.format('MMM D, YYYY'));
var time = new Date();
var hours = time.getHours();
var saveButton = document.getElementById("save");
var taskInput = document.querySelector("#description");

console.log (hours);
timeColors();

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



function renderLastTasks() {
    var task = localStorage.getItem("#description");

    if (!task)
    return;

    task.textContent = task;
    
};

saveButton.addEventListener("click", function(event){
    event.preventDefault();
  saveLastTasks();  
  renderLastTasks();
})

function init() {
    renderLastTasks();
}

init();