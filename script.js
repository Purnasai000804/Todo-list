let i = 0
add.onclick = () => {
  let p = document.createElement("p")
  if (inputfield.value != "") {
    p.innerHTML = inputfield.value
    container.append(p)
    let span = document.createElement("span")
    let btn1 = document.createElement("button")
    let btn2 = document.createElement("button")
    let btn3 = document.createElement('button')
    btn1.innerHTML = "<i class='material-icons'>edit</i>"
    btn2.innerHTML =" <i class='material-icons'>delete</i>"
    btn3.innerHTML =" <i class='material-icons'>check</i>"
    btn1.setAttribute("class", "btn1")
    btn2.setAttribute("class", "btn2")
    btn3.setAttribute('class','btn3')
    btn1.setAttribute("id", `a${++i}`)
    btn2.setAttribute("id", `a${++i}`)
    btn3.setAttribute('id', `a${++i}`)
    btn1.setAttribute("onclick", "edit(this.id)")
    btn2.setAttribute("onclick", "del(this.id)")
    btn3.setAttribute("onclick", "com(this.id)")
    span.append(btn1)
    span.append(btn2)
    span.append(btn3)
    p.append(span)
    inputfield.setAttribute("placeholder", "add your task here")
  }
  else {
    inputfield.setAttribute("placeholder", "Plz enter something to add")
  }
  inputfield.value = ""
  // this is for completing the task which cuts the para tag but is not working 
  //let list = document.querySelectorAll("#container p")
  //  for (let x = 0; x < list.length; x++) {
  //    let task=list[x].firstChild.nodeValue
  //    console.log(task)
  //    task.onclick = () => {
  //    list[x].classList.toggle("completed")
  //    }
  //  }
}

function edit(id) {
  document.getElementById(id).nextElementSibling.classList.add("show")
  let elem = document.getElementById(id).parentElement
  let innertxt = elem.parentElement.firstChild.nodeValue
  inputfield.value = innertxt
  inputfield.setAttribute("placeholder", "edit your task here")
  add.classList.add("show")
  editbtn.classList.remove("show")
  editbtn.onclick = () => {
    let html = elem.outerHTML
    elem.parentElement.innerHTML = inputfield.value + html
    inputfield.value = ""
    inputfield.setAttribute("placeholder", "add your task here")
    add.classList.remove("show")
    editbtn.classList.add("show")
    document.getElementById(id).nextElementSibling.classList.remove("show")
  }
}

function del(id) {
  console.log(id)
  let elem = document.getElementById(id).parentElement
  console.log(elem)
  elem.parentElement.remove()
}

function com(id) {
  let elem = document.getElementById(id).parentElement
  elem.parentElement.classList.toggle('completed')
}
