//Todo: Implement the class Employee here (class syntax)
class Employee {
    constructor(id, name, email, room) {
        this._id = id;
        this._name = name;
        this._email = email;
        this._room = room;

        //this.createEmail();
    }

    get id() {
        return this._id;
    }

    set id(id) {
        this._id = id;
    }

    get name() {
        return this._name;
    }

    createEmail() {
        var name = "";
        for (var i = 0; i < this._name.length; i++) {
            if (this._name.charAt(i) == ' ') {
                name = this._name.substring(i + 1, this._name.length);
            }
        }
        name = name.toLowerCase();
        name += "@fargo.com";
        this._email = name;
        console.log("email: " + name);
    }

    get email() {
        return this._email;
    }

    get room() {
        return this._room;
    }

    toString() {
        return "ID: " + this._id + " Name: " + this._name + " email: " + this._email + " room: " + this._room;
    }

}
