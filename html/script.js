var items = ["item1","item2","item3","item4"] ;


var list = document.querySelector("#myList");
items.forEach( function (item) {

   createItem(item);
});

var close =document.getElementsByClassName("close");



list.addEventListener("click", function(item) {

    if (item.target.tagName = "li"){
        item.target.classList.toggle("checked");
    }

});

document.querySelector("#btnCreate").onclick=function() {
    var item = document.querySelector("#txtItem").value;
    console.log(item);

    if (item === "") {
        alert("lutfen bir deger giriniz.");
        return;
    }

    createItem(item);

};

function createItem () {
    var li = document.createElement("li");
    var t = document.createTextNode(item);

    li.className= "list-group-item";
    li.appendChild(t);
    list.appendChild(li);

    var span = document.createElement("span");
    var text = document.createTextNode("X");
    span.className= 'close';
    span.appendChild(text);
    li.appendChild(span);

    span.onclick = function() {
        var li = this.parentElement;
        li.style.display="none";
};


list.innerHTML = html;