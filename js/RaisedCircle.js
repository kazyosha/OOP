class RaisedCircle {
    _length;
    width;
    constructor(length, width) {
        this._length = length;
        this._width = width;
    }
    getArea(){
        return this._length * this._width;
    }
    getPerimeter(){
        return 2 * (this._length + this._width);
    }
    draw(canvasId) {
        const canvas = document.getElementById("myCanvas");
        if (!canvas || !canvas.getContext) {
            console.error("Không tìm thấy canvas hoặc trình duyệt không hỗ trợ canvas.");
            return;
        }

        const ctx = canvas.getContext("2d");
        ctx.clearRect(0, 0, canvas.width, canvas.height); // Xóa cũ

        ctx.fillStyle = "#c81e61";
        ctx.fillRect(10, 10, this._width, this._length);
    }
    showInfo() {
        return `
            <p>Chiều dài mới: ${this._length}</p>
            <p>Chiều rộng mới: ${this._width}</p>
            <p>Diện tích: ${this.getArea()}</p>
            <p>Chu vi: ${this.getPerimeter()}</p>
        `;
    }

}