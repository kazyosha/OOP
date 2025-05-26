class Mobile {
    _pin;
    _message;
    _inbox;
    outbox;
    status;

    constructor() {
        this._pin = 100;
        this._message = "";
        this._inbox = [];
        this._outbox = [];
        this._status = false;
    }
    checkStatus() {
        if (this.status === false) {
            document.write("dang tat")
        } else {
            document.write("dang bat")
        }
    }

    turnOnOrOff(){
        this._status = !this._status;
    }
    chargePin(){

    }
    writeMessage(text){
        this._message = text;

    }
    sendMessage(mobile){
        this._outbox.push(this._message);
        mobile._inbox.push(this._message);
    }
    readInbox(){
        for(let i = 0; i < this._inbox.length; i++) {
            document.write("tin nhan da nhan so: " + i + " noi dung " + this._inbox[i]+ "</br>");
        }
    }
    readOutbox(){
        for(let i = 0; i < this._outbox.length; i++) {
            document.write("tin nhan da gui so: " + i + " noi dung " + this._outbox[i] + "</br>");
        }

    }
}
