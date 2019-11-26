  function addZero(i) {
    if (i < 10) {
      i = "0" + i;
    }
    return i;
  }

  var today = new Date();
  var day = today.getDay();
  var month = today.getMonth();
  var year = today.getFullYear();
  var daylist = ["Sunday", "Monday", "Tuesday", "Wednesday ", "Thursday", "Friday", "Saturday"];
  var h = today.getHours();
  var m = today.getMinutes()
  var s = today.getSeconds();
  var paragraphDay = document.getElementById = pDay;
  var paragraphTime = document.getElementById = pTime;

  pTime.textContent = "Today is : " + daylist[day] + ".";
  pDay.textContent = "The time is: " + h + ":" + m + ":" + s
  pDate.textContent = "The date is: " + day + "/" + month + "/" + year

  function print_current_page() {
    window.print();
  }

  var numInput = document.getElementById = numberInput;
  var numAnswer = document.getElementById = inputAnswer;

  var numTimes = numInput * 60;

  numInput.onchange = function(){
    numAnswer.textContent = numTimes;
  };

/*----------------------------------------------------------------------------------------------------------*/

