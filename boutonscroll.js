window.onscroll = function () {scrollFunction()};


function scrollFunction() {
    var button = document.getElementById("buttonscroll");

    if (document.body.scrollTop > 0) {
        button.style.opacity = 1;
        button.style.visibility = "visible";
    } else {
        button.style.opacity = 0;
        button.style.visibility = "hidden";
    }
}

function topFunction() {
    document.body.scrollTop = 100;
}