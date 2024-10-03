function changeClass(element){
    element.nextElementSibling.classList.toggle("d-none");

    if(!element.nextElementSibling.classList.contains("d-none")){
       element.querySelector("span").innerHTML = "-";
    }else{
        element.querySelector("span").innerHTML = "+";
    }
}


function selectPartido(element){
    let partidos = document.querySelectorAll(".partido");

    for (var i = 0; i < partidos.length; i++) {
        partidos[i].classList.remove('active');
     }

    element.classList.toggle("active");
}

