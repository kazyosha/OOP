class User {
    //khai bao thuoc tinh
    _name;
    _age;
    _email;


    // gan gia tri thuoc tinh = tham so
    constructor(name, age, email) {
        this._name = name;
        this._age = age;
        this._email = email;
    }

    //Khai bao phuong thuc
    showInfo(){
        return "Name: " + this._name + " Age: " + this._age + " Email: " + this._email;
    }
}