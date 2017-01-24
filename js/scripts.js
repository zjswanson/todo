var x = {item:{priority:9},item2:{priority:2},item3:{priority:6}};
var y = Object.keys(x);
var newArray = [];
var displayArray = [];
var container = {};

function ListItem(task,priority) {
  this.task= task;
  this.priority = priority;
  this.isDone = false;
};

var buildContainer = function(array){
  for (var i=0;i<array.length;i++){
    container["item" +i]=array[i];
  }
}

function tester(){
  var ray = []
  for(i=0;i<Object.keys(x).length;i++){
  ray.push(x[Object.keys(x)[i]].priority);
  }
  ray.sort()

	for(i=0;i<ray.length;i++){
    for(j=0;j<ray.length;j++){
      if(ray[i] === x[y[j]].priority){
        newArray.push(x[y[j]]);
      }
    }
	}

  return newArray;
}

$(document).ready(function() {

  $("form#ticketForm").submit(function(event){


  });


});
