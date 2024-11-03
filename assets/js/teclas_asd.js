cuadro = document.querySelector('#key')

document.addEventListener("keydown", function(event) {
    
    if (event.key === "a" || event.key === "A"){
        cuadro.style.backgroundColor = 'pink'
        }else if(event.key === "s" || event.key === "S"){
            cuadro.style.backgroundColor = 'orange'
        }else if(event.key === "d" || event.key === "D"){
            cuadro.style.backgroundColor = 'skyblue'
        }else if(event.key === "q" || event.key === "Q"){
            nuevoCuadro = cuadro.cloneNode(true);
            document.body.appendChild(nuevoCuadro);
            nuevoCuadro.style.backgroundColor = 'purple'
        }else if(event.key === "w" || event.key === "W"){
            nuevoCuadro = cuadro.cloneNode(true);
            document.body.appendChild(nuevoCuadro);
            nuevoCuadro.style.backgroundColor = 'gray'
        }else if(event.key === "e" || event.key === "E"){
            nuevoCuadro = cuadro.cloneNode(true);
            document.body.appendChild(nuevoCuadro);
            nuevoCuadro.style.backgroundColor = 'brown'
        }})

