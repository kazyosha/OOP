let circle1 = new Circle(2, " Red");
let circle2 = new Circle(3, " Blue");
let circle3 = new Circle(4, " Yellow");

let arrCircle = [circle1, circle2, circle3];

for ( let circle of arrCircle ) {
    document.write(circle.showInfo())
}