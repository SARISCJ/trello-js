window.addEventListener("load", function() {

    var container = document.getElementById("task-container");
    var boton = document.getElementById("boton-task");
    var board = document.getElementById("board");
    
    boton.addEventListener("click", function(e) {
    	e.preventDefault();
      boton.classList.add("ocultar");
      addTask();
    });

    function addTask() {
        
        var entrada = document.createElement("input");
        board.insertBefore(entrada, board.childNodes[0]);
        entrada.classList.add("agregarTexto");
        entrada.setAttribute("type", "text");
        entrada.setAttribute("placeholder", "Añadir una lista...")

        var boton = document.createElement("button");
        var textoBoton = document.createTextNode("Guardar");
        boton.appendChild(textoBoton);
        board.insertBefore(boton, board.childNodes[1]);
        boton.classList.add("boton");
        boton.setAttribute("type", "submit");

        container.classList.add("caja");

        boton.addEventListener("click", function(e) {
            e.preventDefault();

            entrada.classList.add("ocultar");
            boton.classList.add("ocultar");

            var texto = entrada.value;
            var titulo = document.createElement("div");
            titulo.innerHTML = texto;
            board.insertBefore(titulo, board.childNodes[0]);
            titulo.classList.add("titulo");

            var vinculo = document.createElement("a");
            var textoVinculo = document.createTextNode("Añadir una tarjeta...");
            vinculo.appendChild(textoVinculo);
            board.insertBefore(vinculo, board.childNodes[1]);
            vinculo.classList.add("vinculo");
        });
    }
}); 