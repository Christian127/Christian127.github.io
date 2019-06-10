let bubbles = [];

function setup() {
    createCanvas(400, 400);
    let x = random(width);
    let y = random(height);
    let r = random(10, 50);

    let b = new Bubble(x, y, r);
    bubbles.push(b);

    for (let i = 0; i < 10; i++) {
        bubbles [i] = new Bubble(random(400), random(400), 25);
    }
}


function mousePressed() {
    let r = random(10, 50);
    let b = new Bubble(mouseX, mouseY, r);
    bubbles.push(b);
    for(let i = 0; i < bubbles.length; i++) {
        if(bubbles[i].clicked(mouseX, mouseY)) {
            bubbles.splice(i, 1)    }
    }
}

function draw() {
    background(220);
    for (let i = 0; i < bubbles.length; i++) {
        bubbles[i].move();
        bubbles[i].show();

        let num = bubbles.length
        textSize(30)
        strokeWeight(5)
        text(num, 5, 390)

    }
}

class Bubble {
    constructor(x, y, r) {
        this.x = x;
        this.y = y;
        this.r = r;
        this.col = 220;
    }
    clicked(x, y) {
        let dis = dist(x, y, this.x, this.y)
        if(dis < this.r) {
            return true;
        } else {
            return false;
        }
    }

    move() {
        this.x = this.x + random(-5, 5);
        this.y = this.y + random(-5, 5);
    }


    show() {
        stroke(255);
        strokeWeight(4);
        fill(this.col);
        square(this.x, this.y, this.r, this.r);

    }
}