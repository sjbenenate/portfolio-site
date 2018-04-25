var time = new Date().getHours();
var messageText;
var noon = 12;
var evening = 18; // 6PM
var wakeupTime = 8; // 8AM
var lunchTime = 12; // 12PM
var partyTime = 17; // 5PM
var napTime = lunchTime + 2; // 2PM

var messageOut = document.getElementById("timeEvent");
var catImg = document.getElementById('lolcat');
var image = "http://2.bp.blogspot.com/-KqpGoCD6UdI/TbZ2SDVNaEI/AAAAAAAABGk/2Rx6uYgJ0TQ/s1600/funny_monkey.jpg";
//////////////////////////////////////////////////
var isPartyTime = false;
var partyTimeButton = document.getElementById("partyTimeButton");
 
var partyEvent = function() {
   if (isPartyTime === false) {
      isPartyTime = true;
      time = partyTime;
	  partyTimeButton.innerText = "Party Over";
	  partyTimeButton.style.background = "#0A8DAB";
      // text in the button should read "Party Over"
      // color of the button should be "#0A8DAB" (bonus!)
   }
   else {
      isPartyTime = false;
      time = new Date().getHours();
	   partyTimeButton.innerText = "PARTY TIME!";
	  partyTimeButton.style.background = "#222";
      // text in the button should read "PARTY TIME!"
      // color of the button should be "#222" (bonus!)
   }
};

partyTimeButton.addEventListener("click", partyEvent);
//////////////////////////////////////////////////
var wakeupTimeSelector = document.getElementById("wakeUpTimeSelector");

var wakeupTimeUpdate = function() {
	wakeupTime = wakeupTimeSelector.value;
}

wakeupTimeSelector.addEventListener("change", wakeupTimeUpdate);

/////////////////////////////
var lunchTimeSelector = document.getElementById("lunchTimeSelector");
var lunchTimeUpdate = function() {
	lunchTime = lunchTimeSelector.value;
}
lunchTimeSelector.addEventListener("change", lunchTimeUpdate);

/////////////////////////////
var napTimeSelector = document.getElementById("napTimeSelector");

var napTimeUpdate = function() {
	napTime = napTimeSelector.value;
}

napTimeSelector.addEventListener("change", napTimeUpdate);


//////////////////////////////////////////////////
var updateClock = function()
{

if (time == partyTime){
    messageText = "PARTEE TIME IZ NOW!!";
	image = "http://2.bp.blogspot.com/-CYzuI2Zzv1Q/T655Za7UKdI/AAAAAAAAALs/7g7mz7y3eE0/s1600/funny+cat+wallpapers+2.jpg";
} else if (time == napTime) {
    messageText = "ZZZZZZZZZZZZZZZZ…";
	image = "https://tse2.mm.bing.net/th?id=OIP.nuccI3NYe6ayEDMrT-MakAHaFj&pid=Api";
} else if (time == lunchTime) {
    messageText = "IZ NOM NOM NOM TIME!!";
	image = "http://2.bp.blogspot.com/-nMYowyO5Se8/US3Lp3FcTsI/AAAAAAAAgAc/3Pl2R94GB7E/s1600/funny-cat-pictures-039-002.jpg";
} else if (time == wakeupTime) {
    messageText = "WAKIE WAKIE!";
	image = "http://images4.fanpop.com/image/photos/16100000/Beautiful-Cat-cats-16123391-1280-800.jpg";
} else if (time < noon) {
    messageText = "Good morning!";
	image = "http://images6.fanpop.com/image/photos/37200000/Cute-Cat-cats-37245536-1440-900.jpg";
} else if (time > evening) {
    messageText = "Good Evening!";
	image = "http://www.sobi.org/photos/Cat/Istanbul/TableCat/CatOnATable_002.jpg";
} else {
    messageText = "Good afternoon!";
	image = "http://latesthdwallpapers1.com/wp-content/uploads/2014/11/Funny-Cat-Wallpaper-5.jpg";
}

messageOut.innerText = messageText;
catImg.src = image;
catImg.width = 350;

showCurrentTime();

};



var showCurrentTime = function()
{
    // display the string on the webpage
    var clock = document.getElementById('clock');
 
    var currentTime = new Date();
 
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();
    var meridian = "AM";
 
    // Set hours 
    if (hours >= noon) 
    { 
        meridian = "PM"; 
    }  
    if (hours > noon) 
    { 
        hours = hours - 12; 
    }
 
    // Set Minutes
    if (minutes < 10)
    {
        minutes = "0" + minutes;
    }
 
    // Set Seconds
    if (seconds < 10)
    {
        seconds = "0" + seconds;
    }
 
    // put together the string that displays the time
    var clockTime = hours + ':' + minutes + ':' + seconds + " " + meridian + "!";
 
    clock.innerText = clockTime;
};



updateClock();

var oneSecond = 1000;
setInterval(updateClock, oneSecond);
