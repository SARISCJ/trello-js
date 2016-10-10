;(function() {

  window.addEventListener("load", function(){
    var contenedorPadre= document.getElementById("contenedorPadre");
    var papa = document.getElementById("papa");
    var añadir = document.getElementById("añadir");
    var form = document.getElementById("form");
    var button = document.getElementById("boton");
    var div = document.getElementById("div");
    var contador= 1;
        
    div.addEventListener("click", function() {
      agregar(form, div);
      añadir.focus();
    });

    button.addEventListener("click", function(e){
      e.preventDefault();
      var texto = "<a> Añadir una tarjeta...</a>";
      var contenedorHermano = document.createElement("div");
      contenedorHermano.classList.add("papa");
      var padreTemporal = form.parentNode;

      contenedorPadre.appendChild(contenedorHermano);
      contenedorHermano.appendChild(form);
      contenedorHermano.appendChild(div);

      padreTemporal.remove();

      var contenedor = document.createElement("div");
      contenedor.classList.add("form");;
      contenedor.classList.add("inline-block");
      contenedorPadre.insertBefore(contenedor, contenedorPadre.lastElementChild);
      
      contenedor.addEventListener("dragenter", function(){
        this.classList.add("auto");
      });

      contenedor.addEventListener("dragover", function(e){
        this.classList.remove("auto");
        e.preventDefault();
      });
      
      contenedor.addEventListener("drop", function(e){
        this.classList.remove("auto");
        var mensajeMovido= e.dataTransfer.getData("text");
        var element= document.getElementById(mensajeMovido);
        this.insertBefore(element, this.firstElementChild.nextElementSibling);
      }, true);

      agregar(form, div);

      crear("div", añadir.value, contenedor, "titulo");
      crear("div", texto, contenedor, "subTitulo");

      var select = document.querySelectorAll(".subTitulo");

      select[select.length-1].addEventListener("click", function(){
        this.classList.add("none");
        crearform("form", contenedor, "form", this);
      });

        añadir.value="";
      });

    var cerrar = document.getElementById("cerrar");
    cerrar.addEventListener("click", function(e) {
      e.preventDefault();
      agregar(form, div);
    });

    function crearform(form, papa, clase, select){
      var formula = document.createElement(form);
      formula.classList.add(clase);
      papa.appendChild(formula);

      crear("textarea", "", formula, "textArea");
      crear("button", "Guardar", formula, "button");

      formula.lastElementChild.addEventListener("click", function(e){
        e.preventDefault();
        select.classList.remove("none");

        var menTexto = document.createElement("div");
        menTexto.id= "mensaje" + contador;
        menTexto.draggable= true;
        menTexto.innerHTML=formula.firstElementChild.value;
        formula.classList.add("none");
        menTexto.classList.add("texto");
        papa.insertBefore(menTexto, select);
        contador++;

         menTexto.addEventListener("dragstart", function(e){
              e.dataTransfer.setData("text", this.id);
              this.classList.add("dragstar");
          });
          menTexto.addEventListener("dragenter", function(){
              this.classList.add("dragenter");
          });
          menTexto.addEventListener("dragleave", function(){
              this.classList.remove("dragenter")
              this.classList.remove("dragover");
          });
          menTexto.addEventListener("dragover", function(e){
              e.preventDefault();
              this.classList.add("dragover");
          });
          menTexto.addEventListener("drop", function(e){
              this.classList.add("animated", "flash", "bounce");
              this.classList.remove("dragenter");
              this.classList.remove("dragover");
              var contenedorMensaje= e.dataTransfer.getData("text");
              var element= document.getElementById(contenedorMensaje);
              this.parentElement.insertBefore(element, this.nextElementSibling);
          }, true);
          menTexto.addEventListener("dragend", function(){
              this.classList.remove("dragstar");           
          });
      });
    }

    function crear(div, contenido,papa, clase){
      var titulo = document.createElement(div);
      titulo.innerHTML = contenido;
      titulo.classList.add(pd);
      titulo.classList.add(clase);
      papa.appendChild(titulo);
    }

    function agregar(form, div){
      form.classList.toggle("none");
      div.classList.toggle("none");
    }
  });
})();