let rect = new RaisedCircle(100, 150)
rect.draw("myCanvas");
let newLength = rect._length + 120;
let newWidth = rect._width + 100;

rect.draw("myCanvas");

document.getElementById("info").innerHTML = rect.showInfo();