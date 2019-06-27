const input = [
    '5 5',
    '1 2 N',
    'LMLMLMLMM',
    '3 3 E',
    'MMRMMRMRRM'
];

class Rover {
    constructor(position, grid) {
        [this.xMax, this.yMax] = grid.split(' ');
        [this.x, this.y, this.heading] = position.split(' ');
    }

    execute(commands) {
        for (let command of commands) {
            if (command === 'M') this.move();
            else this.turn(command);
        }
    }

    turn(dir) {
        let heading = this.heading
        if (heading === 'N') {
            if (dir === 'R') heading = 'E'
            else if (dir === 'L') heading = 'W'
        }
        else if (heading === 'E') {
            if (dir === 'R') heading = 'S';
            else if (dir === 'L') heading = 'N';
        }
        else if (heading === 'S') {
            if (dir === 'R') heading = 'W';
            else if (dir === 'L') heading = 'E';
        }
        else if (heading === 'W') {
            if (dir === 'R') heading = 'N';
            else if (dir === 'L') heading = 'S';
        }
        this.heading = heading;
    }

    move() {
        let x = this.x;
        let y = this.y;
        let heading = this.heading;
        if (heading === 'N') y++;
        else if (heading === 'E') x++;
        else if (heading === 'S') y--;
        else if (heading === 'W') x--;
        if (x <= this.xMax && x >= 0) this.x = x;
        if (y <= this.yMax && y >= 0) this.y = y;
    }

    get position() {
       return `${this.x} ${this.y} ${this.heading}`;
    }
}

console.log('Input');
for (line of input) console.log(line);
console.log();
console.log('Result');


// Get grid boundaries
let grid = input[0];

// Process each rover input
for (let r = 1; r < input.length; r += 2) {
    let rover = new Rover(input[r], grid);
    let commands = input[r + 1];
    rover.execute(commands);
    console.log(rover.position);
}
