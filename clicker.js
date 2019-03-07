$(document).ready(function () {

    var points = 1000;
    var pointsPerTick = 0;
    var pointsPerClick = 1;
    var tickSpeed = 1000;
    var tickSpeedDecreasePrice = 1000;
    var clickIncreasePrice = 100;
    var autoClickerPrice = 10;
    var autoClickers = 0;
    var pointMachines = 0;
    var pointMachinePrice = 100;

    //open purchase tab
    document.getElementById("default").click();

    //set initial labels on buttons and points label
    label();

    //start incremental timer for point increase
    timeout();

    //function when click button is clicked
    $("#clickButton").click(function () {
        points += pointsPerClick;
        console.log(points);
        label(points, autoClickerPrice);
    });

    //function for purchasing an autoclicker
    $("#purchaseAutoClicker").click(function () {
        if (points >= autoClickerPrice) {
            points -= autoClickerPrice;
            autoClickers += 1;
            autoClickerPrice = Math.pow(autoClickerPrice, 1.1);
            label()
        }else{alert("Not enough points")}
    });
    //function for purchasing a 10% increase to click points
    $("#purchaseClickIncrease").click(function (){
        if (points >= clickIncreasePrice) {
            points -= clickIncreasePrice;
            pointsPerClick=pointsPerClick*1.1
            clickIncreasePrice = Math.pow(clickIncreasePrice, 1.1);
            label();
        }else{alert("Not enough points")}
    });

    //function for purchasing an point machine
    $("#purchasePointMachine").click(function () {
        if (points >= pointMachinePrice) {
            points -= pointMachinePrice;
            pointMachines +=1;
            pointMachinePrice = Math.pow(pointMachinePrice, 1.1);
            label();
        }else{alert("Not enough points")}
    });
    //function to decrease tick speed by %10
    $("#purchaseTickSpeed").click(function () {
        if (points>=tickSpeedDecreasePrice) {
            if (tickSpeed>=100){
            points -= tickSpeedDecreasePrice;
            tickSpeed = tickSpeed-100;
            tickSpeedDecreasePrice = Math.pow(tickSpeedDecreasePrice, 1.1);
            label();
            }else{alert("You already have the lowest tick rate")}
        }else{alert("Not enough points")}
    });

    //function to set/update all labels
    function label() {
        //info labels
        document.getElementById("pointsLabel").innerHTML = "Points: " + points.toFixed(2);
        document.getElementById("pointsPerClickLabel").innerHTML = "Points Per Click: " + pointsPerClick.toFixed(2);
        document.getElementById("autoClickerLabel").innerHTML = "AutoClickers: " + autoClickers;
        document.getElementById("pointMachineLabel").innerHTML = "Point Machines: " + pointMachines;
        document.getElementById("pointsPerTickLabel").innerHTML = "Points Per Tick: " + pointsPerTick.toFixed(2);
        document.getElementById("tickSpeedLabel").innerHTML = "Tick Speed (Seconds): " + (tickSpeed/1000).toFixed(2);
        //button labels
        document.getElementById("purchaseAutoClicker").innerHTML = "AutoClicker: " + autoClickerPrice.toFixed(2);
        document.getElementById("purchaseClickIncrease").innerHTML = "Increase Click %10: " + clickIncreasePrice.toFixed(2);
        document.getElementById("purchasePointMachine").innerHTML = "Point Machine: " + pointMachinePrice.toFixed(2);
        document.getElementById("purchaseTickSpeed").innerHTML = "Increase Tick Speed %10 (Max 100%)" + tickSpeedDecreasePrice.toFixed(2);
    }

    //timer function for incrementing points
    function timeout() {
        setTimeout(function () {
            pointsPerTick = ((.1 * autoClickers)+(.3 * pointMachines));
            points += pointsPerTick;
            label();
            timeout();
        }, tickSpeed);
    }

});

//function to change tabs from purchasing to research
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
