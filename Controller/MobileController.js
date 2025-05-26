let Nokia = new Mobile ()
let Samsung = new Mobile ()

Nokia.writeMessage("Nokia gui " + "xin chao toi la Nokia")
Nokia.sendMessage(Samsung)

Samsung.writeMessage( "Samsung gui " + " Hi ")
Samsung.sendMessage(Nokia)

Samsung.writeMessage( "Samsung gui " + "Nice to meet you")
Samsung.sendMessage(Nokia)

Nokia.readOutbox() // So tin nhan Nokia gui di
Samsung.readOutbox() //So tin nhan SamSung gui di

Nokia.readInbox() // So tin nhan Nokia nhan duoc
Samsung.readInbox() //So tin nhan SamSung nhan duoc

