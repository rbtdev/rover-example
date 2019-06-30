class Rover {
    constructor(position, grid) {
        [this.xMax, this.yMax] = grid.split(' ');
        [this.x, this.y, this.heading] = position.split(' ');
        this.compass = 'NESW'; // Compass headings in clockwise order from North
    }

    execute(commands) {
        for (let command of commands) {
            if (command === 'M') this.move();
            else this.turn(command);
        }
    }

    turn(turn) {
        let turnValues = {
            'L': 3,
            'R': 1
        }
        let turnValue =  turnValues[turn] || 0; // Get the index of the current heading from the compass
        let headingIndex = (this.compass.indexOf(this.heading) + turnValue) % 4; // Compute the lookup value for the new heading
        this.heading = this.compass[headingIndex];
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

module.exports = Rover;