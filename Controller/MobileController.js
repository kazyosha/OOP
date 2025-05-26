let Nokia = new Mobile ()
let Samsung = new Mobile ()

Nokia.writeMessage("xin chao toi la Nokia")
Nokia.sendMessage(Samsung)

Samsung.writeMessage("Hi")
Samsung.sendMessage(Nokia)

Samsung.writeMessage("Nice to meet you")
Samsung.sendMessage(Nokia)

Nokia.readOutbox() // So tin nhan Nokia gui di
Samsung.readOutbox() //So tin nhan SamSung gui di


