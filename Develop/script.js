$(function () {
  var hours = ["hour-9", "hour-10", "hour-11", "hour-12", "hour-1", "hour-2", "hour-3", "hour-4", "hour-5"]; // created an array of all possible ids for hours in the HTML

  for (var i = 0; i < hours.length; i++) {  // itterates through the loop for all hours to update page to the value stored in localstorage
    var iterateHour = hours[i]
    var localText = localStorage.getItem(iterateHour)

    if (localText !== undefined) { // used what jung talked about to shorten code by only specifying what i dont want to happen
      document.querySelector("#" + iterateHour + " .description").value = localText; // selects the elements with the class of description and the id of each of the hours in the hour array
    }                                                                                // sets the value of each hour id to the respective value of local storage
  }
  
  var saveBtns = document.getElementsByClassName('saveBtn'); // selects all save buttons and assigns them in a nodelist to the variable saveBtns
  for (var i = 0; i < saveBtns.length; i++) { // iterates through the nodelist 
    saveBtns[i].addEventListener('click', function() { // adds the same event listener to each save buttons
      var userInput = this.parentNode.querySelector('.description').value; // uses .this to point at the button clicked, .parentNode is refering to the <div> element with the class of time-block, then adds a querySelector to the content section of said timeblock and uses .value to save the information that was typing in the timeblock
      var timeBlockId = this.closest('.time-block').id; // .this points at the button that was clicked, returns the closest element with the class of time-block, then retrieves the value of said time block and returns it on the variable timeBlockID
      localStorage.setItem(timeBlockId, userInput); // sets a key-value pair in the local storage for the hour-x that was clicked and the value of the textcontent
    });
  }

console.log(dayjs()) // doesn't work I tried for a while but cant get the logic to work properly
  var currentTime = dayjs().format('h');
  console.log(currentTime)
  var htmlTimeBlock = document.querySelectorAll('.time-block');

  for(var i = 0; i < htmlTimeBlock.length; i++) {
    var block = htmlTimeBlock[i]
    var hourBlock = block.id.split('-')[1];

    if (hourBlock < currentTime) {
      block.classList.add('past');
    } else if (hourBlock === currentTime) {
      block.classList.add('present');
    } else {
      block.classList.add('future');
    }
  }

});
