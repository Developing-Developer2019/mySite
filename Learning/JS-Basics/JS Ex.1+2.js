 function addZero(i) {
    if (m < 10) {
      m = "0" + m;
    }
    return m;
  }

  function addZero(i) {
    if (s < 10) {
      s = "0" + s;
    }
    return s;
  }

var today = new Date();
  var day = today.getDay();
  var daylist = ["Sunday","Monday","Tuesday","Wednesday ","Thursday","Friday","Saturday"];
  var h = today.getHours();
  var m = today.getMinutes()
  var s = today.getSeconds();
  var paragraphDay = document.getElementById = pDay;
  var paragraphTime = document.getElementById = pTime;

  pTime.textContent = "Today is : " + daylist[day] + ".";
  pDay.textContent = "The time is: " + h + ":" + m + ":" + s

  function print_current_page(){
    window.print();
  }

  function close_current_page(){
    window.close();
  }

  