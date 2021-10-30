function myTimer() {
    setTimeout(function(){
        if(document.getElementsByClassName("disabled").length != 0)
        {
            for (var i=0, max=(document.getElementsByClassName("disabled").length); i < max; i++) {
                document.getElementsByClassName("disabled")[i].style.pointerEvents = "all"
            }
        }
    }, 5000);
}

var myVar = setInterval(myTimer, 5000);