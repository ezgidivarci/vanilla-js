var items = ["item1","item2","item3","item4"] ;


var list = document.querySelector("#myList");
items.forEach( function (item) {

    var li = document.createElement("li");
    var t = document.createTextNode(item);

    li.className= "list-group-item";
    li.appendChild(t);
    list.appendChild(li);

    var span = document.createElement("span");
    var text = document.createTextNode("X");
    span.className= 'close'; //classname veya class list ne farkı var
    span.appendChild(text);
    li.appendChild(span);

});


list.addEventListener("click", function(item) {

    if (item.target.tagName = "li"){
        item.target.classList.toggle("checked");
    }

});


list.innerHTML = html;