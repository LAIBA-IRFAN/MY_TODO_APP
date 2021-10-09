function add_item(){

    if(!input_box.value ==""){
    var li = document.createElement('li');
    var litxt = document.createTextNode(input_box.value)
    li.appendChild(litxt);
    li.setAttribute('class','list_item')
    todo_list.appendChild(li);

    //CREATE EDIT BUTTON
    var edit_btn = document.createElement('button');
    var edit_text = document.createTextNode("Edit");
    edit_btn.appendChild(edit_text);
    edit_btn.setAttribute('onclick','edit_value(this)');
    edit_btn.setAttribute('class','edit_btn');
    li.appendChild(edit_btn);

    //CREATE DELETE BUTTON
    var del_btn = document.createElement('button');
    var del_text = document.createTextNode("Delete");
    del_btn.appendChild(del_text);
    del_btn.setAttribute('onclick','delete_value(this)');
    del_btn.setAttribute('class','del_btn');
    li.appendChild(del_btn);

    input_box.value = "";

    }
    
}


function delete_all(){
    todo_list.innerHTML= "";
}

function edit_value(edit_btn){
    var edit = prompt("Enter the value");
    edit_btn.parentNode.firstChild.nodeValue= edit;

}

function delete_value(del_btn){
    del_btn.parentNode.remove();
}






