//Define and store properties of the rover as it moves
var myRover = {
    position: [0, 0],
    direction: 'N'
};

//Define the location of the rocks.  Rocks should stay in place.
var myRock = [
    [5, 5],
    [4, 4],
    [9, 9],
    [4, 0]
];

  function goForward(rover) {
    switch (rover.direction) {
          case 'N':
              rover.position[0]++;
              //check to see if rover is still on the grid
              loopDeLoop(rover);
              //checkRock() needs the parenthesis to run as a function
              if (checkRock() === true) {
                rover.position[0]--;
              }
              break;

          case 'E':
              rover.position[1]++;


              break;
          case 'S':
              rover.position[0]--;

              break;
          case 'W':
              rover.position[1]--;

              break;

      }
      //include thses lines in the goForward function
      console.log("New Rover Position: [" + myRover.position[0] + ", " + myRover.position[1] + "]");
      console.log("New Rover Direction: ["+ myRover.direction +"]");
    }

  function goBackward(rover) {
    switch (rover.direction) {
          case 'N':


              rover.position[0]--;
              //Added code for Case N from goForward function
              //check to see if rover is still on the grid
              loopDeLoop(rover);
              //checkRock() needs the parenthesis to run as a function
              if (checkRock() === true) {
                rover.position[0]++;
              }
              break;
          case 'E':
              rover.position[1]--;
              break;
          case 'S':
              rover.position[0]++;
              break;
          case 'W':
              rover.position[1]++;
              break;
      }
      console.log("New Rover Position: [" + rover.position[0] + ", " + rover.position[1] + "]");
      console.log("New Rover Direction: ["+ rover.direction +"]");

    }






  function turnRight(rover) {
      switch (rover.direction) {
          case 'N':
              rover.direction = 'E';
              break;
          case 'E':
              rover.direction = 'S';
              break;
          case 'S':
              rover.direction = 'W';
              break;
          case 'W':
              rover.direction = 'N';
              break;
      }

      console.log("New Rover Position: [" + rover.position[0] + ", " + rover.position[1] + "]");
      console.log("New Rover Direction: ["+ rover.direction +"]");
  }

  function turnLeft(rover) {
      switch (rover.direction) {
          case 'N':
              rover.direction = 'W';
              break;
          case 'E':
              rover.direction = 'N';
              break;
          case 'S':
              rover.direction = 'E';
              break;
          case 'W':
              rover.direction = 'S';
              break;
      }


      console.log("New Rover Position: [" + rover.position[0] + ", " + rover.position[1] + "]");
      console.log("New Rover Direction: ["+ rover.direction +"]");
  }

  function checkRock() { /// LOOKIN' FOR PEBBLES
      for (var i = 0; i <= myRock.length - 1; i++) {
          if ((myRover.position[0] === myRock[i][0]) && (myRover.position[1] === myRock[i][1])){
              console.log("you hit a rock damnit!");
              return true;
            }
          }
  }

  //Updated userInput function
  //This function does not need any attributes i.e. (rover) passed to it
  //Added cases for capital and lowercase input.
  function userInput() {
    var input = prompt("Where would you like to go?");
    switch(input) {
      case 'f':
        goForward(myRover);
        userInput();
        break;
      case 'r':
        turnRight(myRover);
        userInput();
          break;
      case 'b':
        goBackward(myRover);
        userInput();
          break;
      case 'l':
        turnLeft(myRover);
        userInput();
          break;
      case 'F':
        goForward(myRover);
        userInput();
          break;
      case 'R':
        turnRight(myRover);
        userInput();
          break;
      case 'B':
        goBackward(myRover);
        userInput();
          break;
      case 'L':
        turnLeft(myRover);
        userInput();
          break;
      case 'q':
        break;
      default:
        break;
    }
  }

  function loopDeLoop(rover) {
    if (rover.position[0] > 9) {
        rover.position[0] = 0;
    } else if (rover.position[0] < 0) {
        rover.position[0] = 9;
    } else if (rover.position[1] > 9) {
        rover.position[1] = 0;
    } else if (rover.position[1] < 0) {
        rover.position[1] = 9;
    }

}

//Start the program
userInput();

//first project at ironhack complete by:
//: Jan 30, 2017.
//Thank you <b>friends</b> for the great help.
