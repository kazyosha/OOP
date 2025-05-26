class Person {
    _id;
    _name;
    _age;
    _gender;
    _birthDate;
    _email;
    _phone;
    _bio  = ""
    _getting;

    constructor(_id, name, age, gender, birthDate, email, phone , bio , getting) {
        this._id = _id;
        this._name = name;
        this._age = age;
        this._gender = gender;
        this._birthDate = birthDate;
        this._email = email;
        this._phone = phone;
        this._bio = bio;
        this._getting = "Yo, toi la " + this._name;
    }
}

class Teacher extends Person {
    _subject;
    _role;
    _position = "";
    constructor(id, name, age, gender, birthDate, email, phone, bio, getting, subject, role){
        super(id, name, age, gender, birthDate, email, phone, bio, getting);
        this._subject = subject;
        this._role = role;
        this._position = this._role + " mon " + this._subject;
        this._bio = "Ten la " + this._name  + ", " + this._age + "tuoi " + "day mon " + this._subject
    }
    showTeacher() {
        return "ID: " + this._id + "</br> "+
            "Name: " + this._name + "</br>"+
            "Age: " + this._age + "</br>"+
            "Gender: " + this._gender + "</br>"+
            "BirthDate: " + this._birthDate + "</br>"+
            "Email: " + this._email + "</br>"+
            "Phone: " + this._phone + "</br>"+
            "Position: " + this._position + "</br>"+
            "Bio: " + this._bio + "</br>"+
            "Getting: " + this._getting + "</br>" + "</br>" + "<hr>";
    }
}
class Student extends Person {
    _favorite;
    constructor(id, name, age, gender, birthDate, email, phone, bio, getting, favorite){
        super(id, name, age, gender, birthDate, email, phone, bio, getting);
    this._favorite = favorite;
    this._bio = "Ten la " + this._name + ", " + this._age + " tuoi " + " so thich " + this._favorite;
    }

    showStudent() {

        return "ID: " + this._id + "</br>"+
             "Name: " + this._name + "</br>"+
            "Age: " + this._age + "</br>"+
            "Gender: " + this._gender + "</br>"+
            "BirthDate: " + this._birthDate + "</br>"+
            "Email: " + this._email + "</br>"+
            "Phone: " + this._phone + "</br>"+
            "Bio: " + this._bio + "</br>"+
            "Getting: " + this._getting + "</br>" + "</br>" + "<hr>";
    }

}