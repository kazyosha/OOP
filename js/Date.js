class Date{
    _thu
    _day;
    _month;
    _year;

    constructor(thu, day, month, year) {
        this._thu = thu;
        this._day = day;
        this._month = month;
        this._year = year;
    }

showInfo(){
        if(this._thu === "Thu 7: " || this._thu ==="Chu nhat: "){
          return this._thu + " ngày " + this._day + "/" + this._month + "/" + this._year +" cuối tuần " + "</br>" + "</br>";
        } else{
          return this._thu + " ngày " + this._day + "/" + this._month + "/" + this._year +" ngày thường "+ "</br>" + "</br>";
        }
}
}
