window.addEventListener("scroll", function(){
    let header= document.querySelector("header");
    header.classList.toggle("abajo",window.scrollY>0);
})

let enlaces=document.getElementsByClassName("cuadro__opciones");
let filtro=document.getElementsByClassName("filtro");


for (var i=0; i< enlaces.length; i++) {
    //Añades un evento a cada elemento
    enlaces[i].addEventListener("click",function() {
       //Aquí la función que se ejecutará cuando se dispare el evento
       let valor=this.getAttribute("data-nombre");
       console.log(valor);
       
       if(valor=="todos"){
            for (var i=0; i< filtro.length; i++){
                filtro[i].style.display="block";
            }
            
       }else{
           for (var i=0; i< filtro.length; i++){
                let v=filtro[i].classList.contains(valor);
                console.log(v);
                if(v==false){
                    filtro[i].style.display="none";
                }else{
                    filtro[i].style.display="block";
                }
            }
       }
       
    });
}

let cuadroOpciones=document.getElementsByClassName("cuadro__opciones");
console.log(cuadroOpciones);
for (var i=0; i< cuadroOpciones.length; i++) {
    cuadroOpciones[i].addEventListener("click",function(){
        //cuadroOpciones.classList.remove("activo");
        let dataNombre=this.getAttribute("data-nombre");
        //let v=filtro[i].classList.contains(valor);
        if(dataNombre=="todos"){
            this.classList.add("activo");
            cuadroOpciones[1].classList.remove("activo");
            cuadroOpciones[2].classList.remove("activo");
        }else if(dataNombre=="web"){
            this.classList.add("activo");
            cuadroOpciones[0].classList.remove("activo");
            cuadroOpciones[2].classList.remove("activo");
        }else if(dataNombre=="full-stack"){
            this.classList.add("activo");
            cuadroOpciones[0].classList.remove("activo");
            cuadroOpciones[1].classList.remove("activo");
        }
        
    });
}