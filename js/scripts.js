var x = {item:{priority:9},item2:{priority:2},item3:{priority:6}};
var displayArray = [];
var container = {};

function ListItem(task,priority) {
  this.task= task;
  this.priority = priority;
  this.isDone = "No";
};

var buildContainer = function(array){
  for (var i=0;i<array.length;i++){
    container["item" +i]=array[i];
  }
  return container;
}

function tester(objToSort){
  var newArray = [];
  var ray = []
  var y = Object.keys(objToSort);
  for(i=0;i<Object.keys(objToSort).length;i++){
  ray.push(objToSort[Object.keys(objToSort)[i]].priority);
  }
  ray.sort().reverse();

	for(i=0;i<ray.length;i++){
    for(j=0;j<ray.length;j++){
      if(ray[i] === objToSort[y[j]].priority){
        newArray.push(objToSort[y[j]]);
      }
    }
	}

  return newArray;
}

var displayList = function(){
  $(".output").empty();
  for (i=0;i<displayArray.length;i++){
    $(".output").append("<li>Task: "+ displayArray[i].task+"</li><ul><li>Priority: " +displayArray[i].priority + "</li><li id='"+i+"'>Completed: "+displayArray[i].isDone +"</li></ul>");
  };
}

$(document).ready(function() {

  $("form#form").submit(function(event){
    event.preventDefault();
    var inputTask = $("input#task").val();
    var inputPriority= parseInt($("input#priority").val());
    var item = new ListItem(inputTask,inputPriority);
    displayArray.push(item);
    displayArray = buildContainer(displayArray);
    displayArray = tester(container);


    displayList();
    $("li").click(function() {
      console.log(this.id);
      if (displayArray[this.id].isDone = "No"){
        displayArray[this.id].isDone = "Yes";
        displayArray[this.id].priority = 0;
      }
      displayList();
    });
  });


});
