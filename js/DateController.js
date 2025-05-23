let date1 = new Date("Thu 2: ","1", "07", "2023");
let date2 = new Date("Thu 3: " ,"2", "07", "2023");
let date3 = new Date("Thu 4: " ,"3", "07", "2023");
let date4 = new Date("Thu 5: ","4", "07", "2023");
let date5 = new Date("Thu 6: ","5", "07", "2023");
let date6 = new Date("Thu 7: ","6", "07", "2023");
let date7 = new Date("Chu nhat: ","7", "07", "2023");
let date8 = new Date("Thu 2: ","8", "07", "2023");
let date9 = new Date("Thu 3: ","9", "07", "2023");
let date10 = new Date("Thu 4: ","10", "07", "2023");
let date11 = new Date("Thu 5: ","11", "07", "2023");
let date12 = new Date("Thu 6: ","12", "07", "2023");
let date13 = new Date("Thu 7: ","13", "07", "2023");
let date14 = new Date("Chu nhat: ","14", "07", "2023");

let date = [date1, date2, date3, date4, date5, date6, date7, date8, date9, date10, date11, date12, date12, date13, date14];


for (const d of date) {
    document.write(d.showInfo());
}
