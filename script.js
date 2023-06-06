var today = dayjs();
$('#currentDay').text(today.format('MMM D, YYYY'));
var time = new Date();
var hours = time.getHours();
var saveButton = document.getElementById("save");
var task = document.querySelector("#description");


function renderLastTasks() {
};

saveButton.addEventListener("click", function(event){
    event.preventDefault();


})