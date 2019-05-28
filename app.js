var rover = {
  directions : "N", 
  x : 0 ,
  y : 0 ,
  travelLog : []
}



function turnLeft(rover){
  console.log("turnLeft was called!");
  switch(rover.directions) {
    case "N":
      rover.directions = "W";
       break;
    case "S":
      rover.directions = "E";
      break;
    case "E":
      rover.directions = "N";
      break;
    case "W":
      rover.directions = "S";
      break;
           
  } if( rover.y < 0){
    console.log("Sorry! Unauthorize position");
    rover.y += 1;
  } else if(rover.y > 10) {
   console.log("Sorry! Unauthorize position");
    rover.y -= 1
  } else if (rover.x < 0) {
   console.log("Sorry! Unauthorize position");
    rover.x += 1;
  } else if (rover.x > 10) {
   console.log("Sorry! Unauthorize position");
    rover.y -= 1;
  } 
  console.log(rover);

}

function turnRight(rover){
  console.log("turnRight was called!");
  switch(rover.directions) {
    case "N" :
      rover.directions = "E";
      break;
    case "S" :
      rover.directions = "W";
      break;
    case "E" :
      rover.directions = "S";
      break;
    case "W" :
      rover.directions = "N";
      break ;
  } if( rover.y < 0){
    console.log("Sorry! Unauthorize position");
    rover.y += 1;
  } else if(rover.y > 10) {
   console.log("Sorry! Unauthorize position");
    rover.y -= 1
  } else if (rover.x < 0) {
   console.log("Sorry! Unauthorize position");
    rover.x += 1;
  } else if (rover.x > 10) {
   console.log("Sorry! Unauthorize position");
    rover.y -= 1;
  } 
  console.log(rover);
}

function moveForward(rover){
  console.log("moveForward was called")
  switch(rover.directions) {
    case "N" :
      rover.y -= 1;
      break;
    case "S" :
      rover.y += 1;
      break;
    case "E" :
      rover.x += 1;
      break;
    case "W" :
      rover.x -= 1;
      break;
  } 
  if( rover.y < 0){
    console.log("Sorry! Unauthorize position");
    rover.y += 1;
  } else if(rover.y > 10) {
   console.log("Sorry! Unauthorize position");
    rover.y -= 1
  } else if (rover.x < 0) {
   console.log("Sorry! Unauthorize position");
    rover.x += 1;
  } else if (rover.x > 10) {
   console.log("Sorry! Unauthorize position");
    rover.y -= 1;
  } rover.travelLog.push(rover.x);
  rover.travelLog.push(rover.y);
  console.log(rover);
}

function moveBackwards(rover){
  console.log("move backwards was called")
   switch(rover.directions) {
     case "N" :
       rover.y += 1;
       break;
      case "S" :
        rover.y -= 1;
        break;
      case "E" :
        rover.x -= 1;
        break;
      case "W" :
        rover.x += 1;
        break;
   } if( rover.y < 0){
     console.log("Sorry! Unauthorize position");
     rover.y += 1;
   } else if(rover.y > 10) {
    console.log("Sorry! Unauthorize position");
     rover.y -= 1
   } else if (rover.x < 0) {
    console.log("Sorry! Unauthorize position");
     rover.x += 1;
   } else if (rover.x > 10) {
    console.log("Sorry! Unauthorize position");
     rover.y -= 1;
   } rover.travelLog.push(rover.x);
   rover.travelLog.push(rover.y);
   console.log(rover);
   
  }



function commands(command){
  
  
  
  for (var i = 0; i < command.length; i++){
    switch (command[i]) {
      case "f":
        moveForward(rover);
        break;
      case "r":
        turnRight(rover);
        break;
      case "l":
        turnLeft(rover);
        break;
      case "b":
        moveBackwards(rover);
        break;  
        default:
          console.log("Sorry wrong command!");
          break;

    }
  }  console.log(rover.travelLog);
}



      
  



    


  
