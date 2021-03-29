let userOne = {
  email: "ryu@gmail",
  name: "ryu",

  login() {
    console.log(this.name);
  },

  logout() {
    console.log(this.email);
  },
};
