class Circle {
    _radius;
    _color;
    _sRadius

    constructor(radius, color) {
        this._radius = radius;
        this._color = color;
        this._sRadius = Math.PI * this._radius * this._radius;

    }

    showInfo() {
        return " Dien tich cua hinh tron co duong kinh la " + this._radius + " va co mau " + this._color + " la  " + this._sRadius + "</br>";
    }
}