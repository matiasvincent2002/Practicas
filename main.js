var contador = 0;

function borrar(elemento) {
  let resultado = confirm("¿Desea borrar esta tarea?");

  if (resultado) {
    elemento.parentNode.removeChild(elemento);
  }
}

function agregarTarea() {
  let nuevaTarea = document.getElementById("nuevaTarea").value;
  if (nuevaTarea !== "") {
    let listaTarea = document.getElementById("listaTarea");
    contador = contador + 1;
    let tareaNew = document.createElement("a");
    let itemNew = document.createElement("li");

    tareaNew.textContent = nuevaTarea;
    itemNew.className = "item row";
  
    itemNew.id = "item" + contador;
    itemNew.ondblclick = function() {  borrar(itemNew); };
   
    listaTarea.appendChild(itemNew);
    itemNew.appendChild(tareaNew);
    document.getElementById("nuevaTarea").value = "";
  } else {
    alert("Escriba alguna tarea");
  }
}




