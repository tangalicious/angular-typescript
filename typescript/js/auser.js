"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var User = /** @class */ (function () {
    function User(id, firstname, lastname, username, active) {
        this.id = id;
        this.firstname = firstname;
        this.lastname = lastname;
        this.username = username;
        this.active = active;
    }
    User.prototype.printOut = function () {
        console.log("id=" + this.id + ", name=" + (this.firstname + " " + this.lastname) + ", username=" + this.username + "\n\t\t\tactive=" + this.active);
    };
    return User;
}());
exports.User = User;
var users = [
    new User(1, "John", "Tyler", "jaytee", true),
    new User(2, "Mary", "Tyler", "maytree", true),
    new User(3, "Jimmy", "Johns", "jayjay", true),
    new User(4, "George", "Costanza", "GeeCee", true),
    new User(5, "Kyle", "James", "KayJay", true)
];
for (var _i = 0, users_1 = users; _i < users_1.length; _i++) {
    var user = users_1[_i];
    user.printOut();
}
//let customer: Customer = new Customer(1, "Max", true, 10000);
//customer.printOut();
