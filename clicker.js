$(document).ready(function() {

    var points=0;
    var pointsPerClick = 1;
    var autoClickerPrice = 10;
    var autoClickers = 0;

    document.getElementById("default").click();
    label(points, autoClickerPrice)

$("#clickButton").click(function() {
    points += pointsPerClick;
    console.log(points);
    label(points, autoClickerPrice);
});

$("#purchaseAutoClicker").click(function() {
    if (points >= autoClickerPrice){
        points -= autoClickerPrice;
        autoClickers+=1;
        autoClickerPrice=Math.pow(autoClickerPrice,1.1);
        label()
        timeout()

    }
});

function label(){
    document.getElementById("pointsLabel").innerHTML = "Points: " + points.toFixed(2);
    document.getElementById("purchaseAutoClicker").innerHTML = "AutoClicker: " + autoClickerPrice;
}

function timeout() {
    setTimeout(function () {
        points += .2*autoClickers;
        label();
        console.log(points);
        console.log(autoClickers);
        timeout();
    }, 1000);
}

});

function tab(evt, tabName) {
     // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active";
}
