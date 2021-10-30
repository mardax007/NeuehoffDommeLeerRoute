function myTimer() {
    if(document.getElementsByClassName("disabled").length != 0)
    {
        for (var i=0, max=(document.getElementsByClassName("disabled").length); i < max; i++) {
            document.getElementsByClassName("disabled")[0].classList.remove("disabled");
        }
    }
}

var x = setInterval(myTimer, 1000);