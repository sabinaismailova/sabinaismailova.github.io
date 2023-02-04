function addTask(){
    var li = document.createElement("li");
    var inputValue = document.getElementById("message-text").value;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    if(inputValue == '')
        alert("You must write something!");
    else
        document.getElementById("list-group").appendChild(li);
    document.getElementById("message-text").value = "";
}