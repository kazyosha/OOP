let user1 = new User("Tam", "21", "chitam@gmail.com");
let user2 = new User("Truong", "21", "chitam@gmail.com");
let user3 = new User("Duy", "21", "chitam@gmail.com");
let user4 = new User("Lich", "21", "chitam@gmail.com");
let user5 = new User("Vinh", "21", "chitam@gmail.com");

let arrResult = [user1, user2, user3, user4, user5];

for (const user of arrResult) {
    document.write(user.showInfo());
}

