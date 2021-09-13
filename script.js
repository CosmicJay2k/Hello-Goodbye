function changeText(){
    if (document.querySelector("#helloBye").innerHTML == "Hello World"){
        document.querySelector("#helloBye").innerHTML = "Goodbye";
    }
    else{
        document.querySelector("#helloBye").innerHTML = "Hello World";
    }
}