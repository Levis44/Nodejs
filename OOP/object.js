class User {
  constructor(name, email) {
    this.email = email;
    this.name = name;
    this.score = 0;
  }

  login() {
    console.log(this.name + " hello");
    return this;
  }

  logout() {
    console.log(this.email + " bye");
    return this;
  }

  updateScore() {
    this.score++;
    console.log(this.score);
    // Method Chaining
    return this;
  }
}

class Admin extends User {
  deleteUser(user) {
    users = users.filter((u) => u.email != user.email);
  }
}

let userOne = new User("Levi", "levi@gmail");
let userTwo = new User("Larissa", "larissa@gmail");
let admin = new Admin("Roberto", "roberto@gmail");

let users = [userOne, userTwo, admin];

admin.deleteUser(userOne);
console.log(users);

// Method Chaining
// userOne.login().updateScore().logout();
