const list = {
}

function changeStatus (task, status) {
 list[task] = status;
}

function addTask (task) {
list[task] = "To Do";
}

function deleteTask (task) {
delete list[task];
}

function showList () {
  
console.log("To Do:")
  for (let task in list) {
      if(list[task] === "To Do") {
          console.log(task);
      }  
  }
  console.log("In Progress:")
  for (let task in list) {
      if(list[task] === "In Progress") {
          console.log(task);
      } 
  }
  
  console.log("Done:")
  for (let task in list) {
      if(list[task] === "Done") {
          console.log(task);
      }
  } 
}



addTask("read a book");
changeStatus("read a book", "Done");
addTask("sport");
addTask("movie night");
addTask("shopping");
deleteTask ("shopping");
addTask("walk with dog");
changeStatus("walk with dog", "In Progress");
changeStatus("walk with dog", "Done");
showList ();
