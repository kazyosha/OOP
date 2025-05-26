let iphone = new Mobile(1, "tam", 21);
let android = new Mobile(2, "truong", 27);

// iPhone gửi tin nhắn đến Android
iphone.sendMessage("Nhan được chưa", android);

// Hiển thị thông tin
document.write(iphone.showInfo(android));