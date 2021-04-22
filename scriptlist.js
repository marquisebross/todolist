function newElement() {
    var li = document.createElement("listGroupItem");
    var inputValue = document.getElementById("myInput").value;
  

   

    var items = document.createTextNode(inputValue);
    li.appendChild(items);
    if (inputValue === '') {
      alert("You must write something!");
    } else {
      document.getElementById("myUL").appendChild(li);
    }
    document.getElementById("myInput").value = "";
  
     }
    
