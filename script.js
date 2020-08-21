const HOURHAND = document.querySelector("#hour");
const MINUTEHAND = document.querySelector("#minute");
const SECONDHAND = document.querySelector("#second");


var date = new Date();
console.log(date);

let hr = date.getHours();
let min = date.getMinutes();
let sec = date.getSeconds();
console.log("Hours: " + hr + " minutes: " + min + " secs: " + sec);


//these let variables will contain the degrees hands will eventually move
//first block
let hrPosition =hr*(360/12) + (min * (360/60)/12); // we divide the 1 hr distance into 12 segment for smooth transition. 
let minPosition =min*360/60 + (sec*(360/60)/60);  //we want to divide the 1 min distance into 60 segments to have smooth increment
let secPosition =sec*360/60;




// wrapped in a fuction to be able to update clock on real time
function runTheClock(){
    
    //this segment (2nd block) is added to keep sec hand animation but we no longer rely on DATE query to keep real time but on the browser to do the math. 
    //we could place the first block here insted to keep a more accurate clock w/o animation. Dependent on DATE query.
    //increment in degrees
    
    //#####seconds hand#####
    // multiply times 10 for non sweeping seconds hand option.
  
    secPosition = (secPosition+0.6);
    minPosition = minPosition+(6/600);
    hrPosition = hrPosition+(3/3600);
    
    //apply as degrees in inline style
    //transform:rotate() is used to move hands in a circular path
    HOURHAND.style.transform = "rotate(" + hrPosition + "deg)";
    MINUTEHAND.style.transform = "rotate(" + minPosition + "deg)";
    SECONDHAND.style.transform = "rotate(" + secPosition + "deg)";
    
    //if we placed second block here. time would be a sec behind. We cold add 1 sec to secPosition definition but it is not a good solution. 
    
      
}

// set to 1000 for non sweeping hand along with top changes under "seconds hand"
var interval = setInterval(runTheClock, 100);


//nav menu function
 function dropDownMenu(){
     
                var x=document.getElementById("dropDownClick");
             
             console.log(x.className);
     
                if(x.className==="topnav"){
                    /*change topnav to topnav.responsive*/
                    x.className +=" responsive";
                }else{
                    x.className="topnav"
                }
                
            }

