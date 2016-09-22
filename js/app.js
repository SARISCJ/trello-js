window.addEventListener("load", function() {

    var taskContainer = document.getElementById("task-container");
    var addTask = document.getElementById("boton-task");
    
    addTask.addEventListener("click", function() {
    addTask.classList.add("ocultar");
      addForm();
    });

    function addForm() {
      var formulario = document.createElement("form");
      taskContainer.insertBefore(formulario, taskContainer.childNodes[0]);

      var publicacion = document.createElement("input");
      formulario.insertBefore(publicacion, formulario.childNodes[0]).classList.add("agregarTexto");

      var boton = document.createElement("button");
      var texto = document.createTextNode("Guardar");
      boton.appendChild(texto);
      formulario.insertBefore(boton, formulario.childNodes[1]).classList.add("boton");

      taskContainer.classList.add("caja");
    }
});