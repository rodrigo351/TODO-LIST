function mostrar() {
  const valor = document.querySelector(".input").value
  
  let li =  document.createElement("li")
  li.innerHTML = valor + "<span onclick= deletar(this)>❌</span>"
  document.querySelector("ul").appendChild(li)
  document.querySelector(".input").value = ""

}

function deletar(li) {

    li.parentElement.remove()

}