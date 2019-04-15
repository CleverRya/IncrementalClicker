$(document).ready(function () {

    var stats = {
    points : 10000000,
    pointsPerTick : 0,
    pointsPerClick : 1,
    tickSpeed : 1000,
    tickSpeedDecreasePrice : 1000,
    clickIncreasePrice : 100,
    autoClickerPrice : 10,
    autoClickers : 0,
    ACIncrement : .1,
    ACIncrementPrice : 100,
    pointMachines : 0,
    pointMachinePrice : 100,
    }

    //open home tab by default
    document.getElementById("defaultTab").click();
    //set initial labels on buttons and stats.points label
    label();
    //start incremental timer for point increase
    timer();
    //function when click button is clicked
    $("#clickButton").click(function () {
        stats.points += stats.pointsPerClick;
        label();
    });

    $('#myBtn').click(function () {
        $('#myModal').modal('show')
    });
    //function for purchasing an autoclicker
    $("#purchaseAutoClicker").click(function () {
        if (stats.points >= stats.autoClickerPrice) {
            stats.points -= stats.autoClickerPrice;
            stats.autoClickers += 1;
            stats.autoClickerPrice = Math.pow(stats.autoClickerPrice, 1.1);
            label()
        } else { alertpoints(); }
    });
    //function for purchasing a 10% increase to manual click points
    $("#purchaseClickIncrease").click(function () {
        if (stats.points >= stats.clickIncreasePrice) {
            stats.points -= stats.clickIncreasePrice;
            stats.pointsPerClick = stats.pointsPerClick * 1.1
            stats.clickIncreasePrice = Math.pow(stats.clickIncreasePrice, 1.1);
            label();
        } else { alertpoints(); }
    });
    //function for purchasing an point machine
    $("#purchasePointMachine").click(function () {
        if (stats.points >= stats.pointMachinePrice) {
            stats.points -= stats.pointMachinePrice;
            stats.pointMachines += 1;
            stats.pointMachinePrice = Math.pow(stats.pointMachinePrice, 1.1);
            label();
        } else { alertpoints(); }
    });
    //function to decrease tick speed by %10
    $("#purchaseTickSpeed").click(function () {
        if (stats.points >= stats.tickSpeedDecreasePrice) {
            if (stats.tickSpeed >= 100) {
                stats.points -= stats.tickSpeedDecreasePrice;
                stats.tickSpeed = stats.tickSpeed - 100;
                stats.tickSpeedDecreasePrice = Math.pow(stats.tickSpeedDecreasePrice, 1.1);
                label();
            } else { alert("You already have the lowest tick rate") }
        } else { alertpoints(); }
    });

    $('#purchaseACIncrement').click(function () {
        if (stats.points >= stats.ACIncrementPrice) {
            stats.points -= stats.ACIncrementPrice;
            stats.ACIncrement += .1;
            stats.ACIncrementPrice = Math.pow(stats.ACIncrementPrice, 1.1);
            label();
        } else { alertpoints(); }
    });

    //function to set/update all labels
    function label() {
        //info labels
        document.getElementById("pointsLabel").innerHTML = "Points: " + stats.points.toFixed(2);
        document.getElementById("pointsPerClickLabel").innerHTML = "Points Per Click: " + stats.pointsPerClick.toFixed(2);
        document.getElementById("autoClickerLabel").innerHTML = "AutoClickers: " + stats.autoClickers;
        document.getElementById("pointMachineLabel").innerHTML = "Point Machines: " + stats.pointMachines;
        document.getElementById("pointsPerTickLabel").innerHTML = "Points Per Tick: " + stats.pointsPerTick.toFixed(2);
        document.getElementById("tickSpeedLabel").innerHTML = "Tick Speed (Seconds): " + (stats.tickSpeed / 1000).toFixed(2);
        //button labels
        document.getElementById("purchaseAutoClicker").innerHTML = "AutoClicker: " + stats.autoClickerPrice.toFixed(2);
        document.getElementById("purchaseClickIncrease").innerHTML = "Increase Click %10: " + stats.clickIncreasePrice.toFixed(2);
        document.getElementById("purchasePointMachine").innerHTML = "Point Machine: " + stats.pointMachinePrice.toFixed(2);
        document.getElementById("purchaseTickSpeed").innerHTML = "Increase Tick Speed %10: " + stats.tickSpeedDecreasePrice.toFixed(2);
        document.getElementById("purchaseACIncrement").innerHTML = "Increase AutoClicker Point Gen %10: " + stats.ACIncrementPrice.toFixed(2);
    }

    //timer function for incrementing points
    function timer() {
        setTimeout(function () {
            stats.pointsPerTick = ((stats.ACIncrement * stats.autoClickers) + (.3 * stats.pointMachines));
            stats.points += stats.pointsPerTick;
            label();
            timer();
        }, stats.tickSpeed);
    }

    function alertpoints() {
        alert("Not enough points");
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
