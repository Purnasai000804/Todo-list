let i = 0
add.onclick = () => {
  let p = document.createElement("p")
  if (inputfield.value != "") {
    p.innerHTML = inputfield.value
    container.append(p)
    let span = document.createElement("span")
     span.innerHTML = `<button class='btn1' id=a${++i} onclick='edit(this.id)'><i class='material-icons'>edit</i></button>` +
      `<button class='btn2' id=a${++i} onclick='del(this.id)'><i class='material-icons'>delete</i></button>` +
      `<button class='btn3' id=a${++i} onclick='com(this.id)'><i class='material-icons'>check</i></button>`
    p.append(span)
    inputfield.setAttribute("placeholder", "add your task here")
  }
  else {
    inputfield.setAttribute("placeholder", "Plz enter something to add")
  }
  inputfield.value = ""
}

function edit(id) {
  document.getElementById(id).nextElementSibling.classList.add("dis-none")
  let elem = document.getElementById(id).parentElement
  let innertxt = elem.parentElement.firstChild.nodeValue
  inputfield.value = innertxt
  inputfield.setAttribute("placeholder", "edit your task here")
  add.classList.add("dis-none")
  editbtn.classList.remove("dis-none")
  editbtn.onclick = () => {
    let html = elem.outerHTML
    elem.parentElement.innerHTML = inputfield.value + html
    inputfield.value = ""
    inputfield.setAttribute("placeholder", "add your task here")
    add.classList.remove("dis-none")
    editbtn.classList.add("dis-none")
    document.getElementById(id).nextElementSibling.classList.remove("dis-none")
  }
}

function del(id) {
  let elem = document.getElementById(id).parentElement
  elem.parentElement.remove()
}

function com(id) {
  let elem = document.getElementById(id).parentElement
  elem.parentElement.classList.toggle('completed')
}
