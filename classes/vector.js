class Vector {

    #x;
    #y;

    constructor(x, y, polar=false) {
        if (!polar) {
            this.#x = x;
            this.#y = y;
        } else {
            this.#x = x * Math.cos( y );
            this.#y = x * Math.sin( y );
        }
    }

    get x() {
        return this.#x;
    }

    get y() {
        return this.#y;
    }

    get length() {
        let l = (this.#x**2 + this.#y**2)**(1/2);
        return l;
    }

    get angle() {
        return 0; // to-do
    }

    toString() {
        let s = "[" + this.#x + ", " + this.#y + "]";
        return s;
    }

    add(vector) {
        this.#x += vector.x;
        this.#y += vector.y;
    }

    subtract(vector) {
        this.#x -= vector.x;
        this.#y -= vector.y;
    }
    multiply(scalar){
        this.#x *= scalar;
        this.#y *= scalar;
    }
    static add(left, right) {
        let x = left.x + right.x;
        let y = left.y + right.y;
        return new Vector(x, y);
    }

    static subtract(left, right) {
        let x = left.x - right.x;
        let y = left.y - right.y;
        return new Vector(x, y);
    }
    static multiply(vector, scalar){
        return new Vector(vector.x*scalar, vector.y*scalar);
    }
    static random() {
        let angle = Math.random() * 2 * Math.PI;
        let x = Math.cos(angle);
        let y = Math.sin(angle);
        return new Vector(x,y);
    }
}