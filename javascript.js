var listOfItems = [];

var input = document.getElementById("input");
var todolist = document.getElementById("todolist");
document.getElementById("button").onclick = click;

function click() {
    
  listOfItems.push(input.value);
  console.log(listOfItems);
  input.value = "";
  showList();
}

// function -> showList()

function showList() {

  todolist.innerHTML = " ";
  listOfItems.forEach(function (n, i) {
    todolist.innerHTML +="<li>" +n +"<a onclick='editItem(" +i +")'>Edit</a>" +"<a onclick='deleteItem(" +i +
")'>&times | </a></li>";
  });
}

//For editing

function editItem(i) {
  //Using prompt to get the new value of the activty after editing
  var newValue = prompt("Please insert your new value");
  // Using splice array operation to remove the previous activity and add the new activity
  listOfItems.splice(i, 1, newValue);
  //Display the list
  showList();
}

//For deleting 

function deleteItem(i) {
  // Using splice array operations to remove one item at specified index
  listOfItems.splice(i, 1);
  showList();
}
