let person1 = new Student(1, "Tam", 21, "Nam",
    "04/07/2003", "chitampham07@gmail.com", "094443781",
    "", " ", " The thao dien tu");
let person2 = new Student(2, "Cuong", 21, "Nam",
    "04/08/2003", "cuong07@gmail.com", "09444xxxx",
    "", "", " Music, Esport");
let person3 = new Student(3, "Truong", 21, "Nam",
    "04/07/xxxx", "truongpham07@gmail.com", "09xxxx3781",
    "", "", " Sieu xe");
let person4 = new Student(4, "Linh", 21, "Nu",
    "04/07/2003", "linh07@gmail.com", "094443781",
    "", " ", " Music, Esport" );
let person5 = new Teacher(1, "Luan", 31, "Nam",
    "04/07/1993", "luan07@gmail.com", "09xxx378x",
    "", " ", " Toan", "Giang vien");

let student = [person1, person2, person3, person4];
let teacher = [person5];

document.write("<h2>Danh sách Sinh viên</h2>");
for (let s of student) {
    document.write(s.showStudent());
}

document.write("<h2>Danh sách Giảng viên</h2>");
for (let t of teacher) {
    document.write(t.showTeacher());
}