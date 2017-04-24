// Set up!
function calculate(){
 var radius1 = document.getElementById("radiusInput").value;

  var result;

  if (radius1 > 0) {

   var finalRadius = Math.PI*radius1*radius1;

   result = "This is the area of your circle " + finalRadius.toFixed(2) + ". Congrats!!!";

} else {

   result = "Not a valid radius. Try again please ";
}

document.getElementById("valid").innerText = result;
document.getElementById("circlemov").style.width=(radius1*2)+"px";
document.getElementById("circlemov").style.height=(radius1*2)+"px";
}
