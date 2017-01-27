var myRover = {
    position: [0, 0],
    direction: 'N'
};

var myRock = [
    [5, 5],
    [4, 4],
    [9, 9],
    [1, 1]
];

function goForward(rover) {
    switch (rover.direction) {
        case 'N':
            rover.position[0]++;

            checkRock(myRock, myRover);

            immediateDeath(rover);
            break;

        case 'E':
            rover.position[1]++;
            immediateDeath(rover);

            break;
        case 'S':
            rover.position[0]--;
            immediateDeath(rover);
            break;
        case 'W':
            rover.position[1]--;
            immediateDeath(rover);
            break;
    }

    console.log("New Rover Position: [" + rover.position[0] + ", " + rover.position[1] + "]");
}

function goBackward(rover) {
    switch (rover.direction) {
        case 'N':

            var currentPosition = [rover.position[0], rover.position[1]];

            rover.position[0]--;

            checkRock(myRock, myRover);
            immediateDeath(rover);



            break;

        case 'E':
            rover.position[1]--;
            immediateDeath(rover);
            break;
        case 'S':
            rover.position[0]++;
            immediateDeath(rover);
            break;
        case 'W':
            rover.position[1]++;
            immediateDeath(rover);
            break;
    }

    console.log("New Rover Position: [" + rover.position[0] + ", " + rover.position[1] + "]");
}


function turnRight(rover) {
    switch (rover.direction) {
        case 'N':
            rover.direction = 'E';
            break;
        case 'E':
            rover.position = 'S';
            break;
        case 'S':
            rover.position = 'W';
            break;
        case 'W':
            rover.position = 'N';
            break;
    }

    console.log("New Rover Position: [" + rover.position[0] + ", " + rover.position[1] + "]");
}

function turnLeft(rover) {
    switch (rover.direction) {
        case 'N':
            rover.direction = 'W';
            break;
        case 'E':
            rover.position = 'N';
            break;
        case 'S':
            rover.position = 'E';
            break;
        case 'W':
            rover.position = 'S';
            break;
    }


    console.log("New Rover Position: [" + rover.position[0] + ", " + rover.position[1] + "]");
}

var myRock = [
    [5, 5],
    [4, 4],
    [9, 9],
    [1, 1]
];

function checkRock(myRock, myRover) { /// LOOKIN FOR PEBBLES


    for (var i = 0; i <= myRock.length - 1; i++) {
        if ((myRover.position[0] === myRock[i][0]) && (myRover.position[1] === myRock[i][1])) {
            console.log("you hit a rock damnit!");



        }
    }
}


function userInput() { //WHERE WE GOIN?

    var nextDir = prompt("Where do you want the rover to move (w, s, d, a)?: ");
    // for (var i = 0; i <= 10; i++)

    switch (nextDir) {

        case "w":
            goForward(myRover);
            break;

        case "d":
            turnRight(myRover);

            break;

        case "s":
            goBackward(myRover);
            break;

        case "a":
            turnRight(myRover);

            break;





    }

}

function immediateDeath(rover) {
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

userInput();
