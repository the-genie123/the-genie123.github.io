function rmcalc() {
  var weight = document.getElementById("weight").value;
  var repmax = document.getElementById("repmax").value;
  var onerm = weight * (1 + repmax/40)

  if (weight.length == 0 & repmax.length == 0){
    window.alert ("Please enter the weight and repetitions")
    return false;
  }
  else if (weight.length == 0) {
    window.alert ("Please enter a weight");
    return false;
  }
  else if (repmax.length == 0) {
    window.alert ("Please enter the repitions");
    return false;
  }
  else {
    document.getElementById("result").innerHTML = "Your 1 Rep max is " + Math.round(onerm);
    return false;
  }

}

function wilksfunc() {
  var gender = document.getElementById("gender").value;
  var weightunit = document.getElementById("weightunit").value;
  var bodyweight = document.getElementById("bodyweight").value;
  var totalweight = document.getElementById("totalweight").value;

  if (weightunit == "lbs"){
    totalweight = totalweight/2;
    bodyweight = bodyweight/2;
  }
  else {
    totalweight = totalweight;
    bodyweight = bodyweight;
  }

  if (bodyweight.length == 0 & totalweight.length == 0){
    window.alert ("Please enter the body weight and weight lifted!")
    return false;
  }
  else if (bodyweight.length == 0) {
    window.alert ("Please enter your bodyweight!");
    return false;
  }
  else if (totalweight.length == 0) {
    window.alert ("Please enter total weight lifted!");
    return false;
  }

  var malewilks = totalweight * (500/ (-216.0475144 + 16.2606339*bodyweight -0.002388645*Math.pow(bodyweight,2) -0.00113732*Math.pow(bodyweight,3) + 7.01863*Math.pow(10,-6)*Math.pow(bodyweight,4) -1.291*Math.pow(10,-8)*Math.pow(bodyweight,5)));
  var femalewilks = totalweight * (500/ (594.31747775582 -27.23842536447*bodyweight + 0.82112226871*Math.pow(bodyweight,2) -0.00930733913*Math.pow(bodyweight,3) + 4.731582*Math.pow(10,-5)*Math.pow(bodyweight,4) -9.054*Math.pow(10,-8)*Math.pow(bodyweight,5)));

  if (gender == "male"){
    document.getElementById("result").innerHTML = "Wilks: " + Math.round(malewilks * 100)/100;
    return false;
  }
  else{
    document.getElementById("result").innerHTML = "Wilks: " + Math.round(femalewilks * 100)/100;
    return false;
  }

}
