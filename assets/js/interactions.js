function display(id,value){
    var element = document.getElementById(id);
    if(element.style.display == "none"){
        element.style.display = value;
    }
    else{
        element.style.display = "none";
    }
}