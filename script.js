var today = dayjs();
$('#currentDay').text(today.format('MMM D, YYYY'));
var time = new Date();
var hours = time.getHours();
var saveButton = document.getElementById("save");
var task = document.querySelector("#description");

console.log (hours);
timeColors();

function timeColors() {
    var timeSlot = document.querySelectorAll(".future");
    var timeSlotArr = Array.from(timeSlot);
    var idTime = timeSlotArr.id
    var timeNumber = Number(idTime)

    console.log (idTime);
    console.log (timeSlotArr);

	for (var i = 0; i < timeSlot.length; i++) 
    {
        var idTime = timeSlotArr[i].id;
        var timeNumber = Number(idTime);
        var classChange = $(this).attr("class");
        /*
        console.log (classChange);
        console.log (timeNumber);
        console.log (idTime);*/
	  console.log('timeSlots: ', timeSlotArr[i]);
      if (idTime < hours) {
        console.log ('yes');
        document.getElementById('9').className = "row time-block past";
      } else if (idTime == hours) {
        console.log ('maybe');
      }
      else {
        console.log ('no')
      }

}}
    /*
    var i = 1;
    if (!document.getElementById("hours-" + i))
    return;
    if (i < hours)
    document.getElementById("hours-" + i).classList.add("past");
    i++;
    }*/
    

   /* var timeSlot = document.body.id.getElementsByTagName('ID');
    console.log(timeSlot);*/
    /*if (isNan(timeSlot)){
        console.log("it is a number")
    } 
    else {
        console.log("Not a Number")*/
    

/*
function renderLastTasks() {
};

saveButton.addEventListener("click", function(event){
    event.preventDefault();


})*/