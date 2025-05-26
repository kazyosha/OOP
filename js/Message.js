class Mobile {
    _id;
    _name;
    _age;
    _message;

    constructor(id, name, age) {
        this._id = id;
        this._name = name;
        this._age = age;
        this._message = "";
    }

    setMessage(message) {
        this._message = message;
    }

    getMessage() {
        return this._message;
    }

    sendMessage(message, mobile) {
        mobile.setMessage(message);
    }

    getInfo() {
        return `ID: ${this._id}, Name: ${this._name}, Age: ${this._age}`;
    }

    showInfo(receiverMobile) {
        return 'Iphone ' + this.getInfo() +
            " gửi đến Android có thông tin " + receiverMobile.getInfo() +
            " với Message: \"" + receiverMobile.getMessage() + "\"";
    }
}