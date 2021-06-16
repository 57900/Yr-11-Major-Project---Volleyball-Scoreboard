//Visual Scoreboard Component

//Setting global variables:
var ScoreAway=0
var ScoreHome=0
var AwayScore = document.getElementById("AwayDisplay")
var HomeScore = document.getElementById("HomeDisplay")
HomeScore.innerHTML=ScoreHome
AwayScore.innerHTML=ScoreAway
var HNameData=document.getElementById("EnterHome")
var ANameData=document.getElementById("EnterAway")
var HName=document.getElementById("HomeName")
var AName=document.getElementById("AwayName")
var HNameDiv=document.getElementById("HomeNameDiv")
var ANameDiv=document.getElementById("AwayNameDiv")
var counter=document.getElementById("Timer")
var minutes=50
var StartDiv=document.getElementById("StartButton")
var SetData=document.getElementById("SetTracker")
var Period=1

var HomeNameInput = document.getElementById("EnterHome");
HomeNameInput.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
    event.preventDefault();
   document.getElementById("AddHName").click();
  }
  })

var AwayNameInput = document.getElementById("EnterAway");
AwayNameInput.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
    event.preventDefault();
   document.getElementById("AddAName").click();
  }
  })
//Function for changing the set number
function AddSet(){
  if(Period==3){
    //In 3 set games, there are obviously only 3 sets. So,
    alert("This is a 3 set game - There is no next set to toggle to")
    return
  }else{
  Period=Period+1
  SetData.innerHTML="Set "+Period
  }
}

//Functions for changing the home team score:
function HomePoint(){
  ScoreHome++
  HomeScore.innerHTML=ScoreHome
}

function HomeLoss(){
  ScoreHome--
  HomeScore.innerHTML=ScoreHome
}
//Functions for changing the away team score:
function AwayPoint(){
  ScoreAway++
  AwayScore.innerHTML=ScoreAway
}

function AwayLoss(){
  ScoreAway--
  AwayScore.innerHTML=ScoreAway
}
//Functions for setting team names:
function HomeName(){
  HName.innerHTML=HNameData.value
  HNameDiv.style.display="none"
}

function AwayName(){
  AName.innerHTML=ANameData.value
  ANameDiv.style.display="none"
}
//function for resetting the scoreboard:
function Clear(){
  HNameDiv.style.display="block"
  HName.innerHTML=""
  HomeScore.innerHTML=0
  ScoreHome=0
  ANameDiv.style.display="block"
  AName.innerHTML=""
  AwayScore.innerHTML=0
  ScoreAway=0
  HNameData.value=""
  ANameData.value=""
  minutes=50
  Period=1
  SetData.innerHTML="Set "+Period
  return
}
//A timer module that Lau Enterprises found online that is free to use
function _timer(callback)
{
    var time = 0;     //  The default time of the timer
    var mode = 0;     //    Mode: count up or count down
    var status = 0;    //    Status: timer is running or stoped
    var timer_id;    //    This is used by setInterval function
    
    // this will start the timer ex. start the timer with 1 second interval timer.start(1000) 
    this.start = function(interval)
    {
        interval = (typeof(interval) !== 'undefined') ? interval : 1000;
 
        if(status == 0)
        {
            status = 1;
            timer_id = setInterval(function()
            {
                switch(mode)
                {
                    default:
                    if(time)
                    {
                        time--;
                        generateTime();
                        if(typeof(callback) === 'function') callback(time);
                    }
                    break;
                    
                    case 1:
                    if(time < 106400)
                    {
                        time++;
                        generateTime();
                        if(typeof(callback) === 'function') callback(time);
                    }
                    break;
                }
            }, interval);
        }
    }
    
    //  Same as the name, this will stop or pause the timer ex. timer.stop()
    this.stop =  function()
    {
        if(status == 1)
        {
            status = 0;
            clearInterval(timer_id);
        }
    }
    
    // Reset the timer to zero or reset it to your own custom time ex. reset to zero second timer.reset(0)
    this.reset =  function(sec)
    {
        sec = (typeof(sec) !== 'undefined') ? sec : 0;
        time = sec;
        generateTime(time);
    }
    
    // Change the mode of the timer, count-up (1) or countdown (0)
    this.mode = function(tmode)
    {
        mode = tmode;
    }
    
    // This methode return the current value of the timer
    this.getTime = function()
    {
        return time;
    }
    
    // This methode return the current mode of the timer count-up (1) or countdown (0)
    this.getMode = function()
    {
        return mode;
    }
    
    // This methode return the status of the timer running (1) or stoped (1)
    this.getStatus
    {
        return status;
    }
    
    // This methode will render the time variable to minute:second format
    function generateTime()
    {
        var second = time % 60;
        var minute = Math.floor(time / 60) % 60;
        
        second = (second < 10) ? '0'+second : second;
        minute = (minute < 10) ? '0'+minute : minute;
        
        $('div.timer span.second').html(second);
        $('div.timer span.minute').html(minute);
    }
}
 
// example use
var timer;
 
$(document).ready(function(e) 
{
    timer = new _timer
    (
        function(time)
        {
            if(time == 0)
            {
                timer.stop();
                alert('time out');
            }
        }
    );
    timer.reset(0);
    timer.mode(0);
});



