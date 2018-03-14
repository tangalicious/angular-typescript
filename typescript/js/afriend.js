"use strict";
var Friend = /** @class */ (function () {
    function Friend(id, name, email, years, playsgames) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.years = years;
        this.playsgames = playsgames;
    }
    Friend.prototype.printOut = function () {
        console.log("id=" + this.id + ", name=" + this.name + ", email=" + this.email + ", years=" + this.years + ", \n\t\t\tactive=" + this.playsgames);
    };
    return Friend;
}());
var friends = [
    new Friend(1, "John", "johnny@coolstuff.com", 3, true),
    new Friend(2, "Mary", "mare@newthings.com", 3, true),
    new Friend(3, "Jimmy", "james@funactivities.com", 3, true),
    new Friend(4, "George", "georgeo@funny.com", 4, true),
    new Friend(5, "Kyle", "kale@cooking.com", 5, true)
];
for (var _i = 0, friends_1 = friends; _i < friends_1.length; _i++) {
    var friend = friends_1[_i];
    friend.printOut();
}
//let customer: Customer = new Customer(1, "Max", true, 10000);
//customer.printOut();
