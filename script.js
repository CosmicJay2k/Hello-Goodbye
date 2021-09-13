let changeBtn = document.querySelector("#btn");

changeBtn.addEventListener("click",
    function () {
        let btnText = document.querySelector("#helloBye").innerHTML
        if (btnText == "Hello World") {
            document.querySelector("#helloBye").innerHTML = "Goodbye";
        }
        else {
            document.querySelector("#helloBye").innerHTML = "Hello World";
        } /* Förlåt, fick feeling :) */
    }
);
/* JSPI21 - Uppgift 3 - Introduktion Till Webbutveckling - John - Tannenberg */