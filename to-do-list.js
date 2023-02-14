var color = "";

function taskType(elt){
    if(elt.getAttribute("id") == "work"){
        color = "background-color: rgb(246, 214, 101, 0.5)";
    }
    if(elt.getAttribute("id") == "studies"){
        color = "background-color: rgb(138, 204, 161, 0.5)";
    }
    if(elt.getAttribute("id") == "life"){
        color = "background-color: rgb(220, 171, 226, 0.5)";
    }
}

function celebration(elt){
    var img = document.getElementById('img');
    if(elt.checked){
        img.style = '';
        setTimeout(function(){img.style = 'display:none'}, 700);
    }
}

    /*Got the template for this function from W3schools tutorial. Link:https://www.w3schools.com/howto/howto_js_todolist.asp*/
function addTask(){
    var label = document.createElement("label");
    label.className = "list-group-item d-flex gap-2";
    label.style = color;
    var input = document.createElement("input");
    input.className = "form-check-input flex-shrink-0 strikethrough";
    input.id = "check";
    input.type = "checkbox";
    input.oninput = function(){var img = document.getElementById("img");
                            if(this.checked){
                                img.style = "";
                                setTimeout(function(){img.style = "display:none"}, 700);
                            }
                };
    input.value = "";
    var inputValue = document.getElementById("message-text").value;
    var t = document.createTextNode(inputValue);
    var span = document.createElement("span");
    span.appendChild(t);
    var newLine = document.createElement("br");
    span.appendChild(newLine);
    var selectedDate = document.getElementById("date").value;
    if(selectedDate!=""){
        var dateSpace = document.createElement("small");
        var due = document.createElement("input");
        due.type="date";
        due.value=selectedDate;
        dateSpace.appendChild(due);
        span.appendChild(dateSpace);
    }
    label.appendChild(input);
    label.appendChild(span);
    if(inputValue == '')
        alert("You must write something!");
    else
        document.getElementById("list-group").appendChild(label);
    document.getElementById("message-text").value = "";
    document.getElementById("date").value = "";
    var s = document.createElement("span");
    s.className = "close";
    s.id = "close";
    var btn = document.createElement("button");
    btn.className = "btn-close";
    btn.type = "button";
    btn.onclick = function(){this.parentElement.parentElement.remove();};
    s.appendChild(btn);
    label.appendChild(s);
    var xButton = document.getElementById("x-button");
    xButton.click();
        color = "";
}