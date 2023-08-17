

function addTodo() {
    var todo = document.getElementById("todo").value;
    var list = document.getElementById("list");
    var li = document.createElement("li");
    var text = document.createTextNode(todo);
    li.appendChild(text);
   
    var dltButton = document.createElement("button");
    var dltText = document.createTextNode("Delete");
    dltButton.appendChild(dltText);
    li.appendChild(dltButton);
    dltButton.setAttribute('onclick','delTodo()')

    var editButton = document.createElement("button");
    var editText = document.createTextNode("Edit");
    editButton.appendChild(editText);
    li.appendChild(editButton);
    editButton.setAttribute('onclick','editTodo()')


    list.appendChild(li);

    document.getElementById("todo").value = "";
    console.log(li);
}
function delTodo(){                               // dlt item
 event.target.parentNode.remove()
}
function dltAll(){                                             //dlt all//
    var list=document.getElementById("list")
    console.log(list)
    list.innerHTML = ""
}
function editTodo(){
    console.log(event.target.parentNode)
}