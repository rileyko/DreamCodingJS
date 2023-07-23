class UserStorage {
  loginUser(id, password) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (
          (id === "woodeem" && password === "gorani") ||
          (id === "deeming" && password === "pypy")
        ) {
          resolve(id);
        } else {
          reject(new Error("not found"));
        }
      }, 2000);
    });
  }
  getRoles(user) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (user === "woodeem") {
          resolve({ name: "woodeem", role: "admin" });
        } else {
          reject(new Error("no access"));
        }
      }, 1000);
    });
  }
}

const UserStorage2 = new UserStorage();
const id = prompt("Enter your id");
const password = prompt("Enter your password");
UserStorage2.loginUser(id, password)
  .then(UserStorage2.getRoles)
  .then((user) => alert(`hello ${user.name}, you have a ${user.role} role`))
  .catch(console.log);
