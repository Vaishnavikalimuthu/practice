var input = prompt()

if(input %2 === 0){
    document.getElementById("myH1").style.color = "orange";
}
else if(input %2 === 1){
    document.getElementById("myH1").style.color = "red";
}
else{
    document.getElementById("myH1").style.color = "black";
}

