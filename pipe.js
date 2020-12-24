function Pipe() {
    var spacing = random(150, (height / 2) + 50);
    var centery = random(spacing, height - spacing);

    this.top = centery - spacing / 2;
    this.bottom = height - (centery + spacing / 2);
    this.x = width;
    this.w = 40;
    this.speed = -4;

    this.colorChange = false;
    this.show = function () {
        fill(80, 200, 120);
        if (this.colorChange == true) {
            fill("red");
        }
        rect(this.x, 0, this.w, this.top);
        rect(this.x, height - this.bottom, this.w, this.bottom);
    }

    this.hits = function (bird) {
        if (bird.colorChange == true) {
            this.speed = 0;
        }
        if (bird.colorChange2 == true) {
            //this.colorChange = true;
            this.speed = 0;
        }

        if (bird.y < this.top + 20 || bird.y > height - this.bottom - 20) {
            if (bird.x > this.x - 20 && bird.x < this.x + this.w + 20) {
                this.colorChange = true;
                bird.freeze();
                bird.colorChange2 = true;
                return true;

            }

        }
        return false;

    }
    this.move = function () {
        this.x += this.speed;
    }

    this.offscreen = function () {
        if (this.x < -this.w) {
            score++
            return true;
        } else {
            return false;
        }
    }
}