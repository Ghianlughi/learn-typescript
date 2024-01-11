"use strict";
// export class User {
//     constructor(public name: string, public age: number) {
//     }
// }
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
// let user = new User("Ghianlughi", 18);
// console.log(user);\
class User {
    constructor(name, age) {
        this.age = age;
        this.getName = () => {
            return this.name;
        };
        this.name = name;
    }
    setName(value) {
        this.name + value;
    }
}
exports.User = User;
// public = bisqa di akses di semua class / dari luar class
// protected = hanya bisa di akses dari class tersebut, dann kelaas turunannya\
// private = hanya bisa di akses dari class itu sendiri
// latihan awal 
class Admin extends User {
    constructor(phone, name, age) {
        super(name, age);
        this.read = true;
        this.write = true;
        this._email = "";
        this.phone = phone;
    }
    static getNameRole() {
        return "Haloo broo";
    }
    getRole() {
        return {
            read: this.read,
            write: this.write
        };
    }
    ;
    set email(value) {
        if (value.length < 5) {
            this._email = "email anada salah";
        }
        else {
            this._email = value;
        }
    }
    get email() {
        return this._email;
    }
}
Admin.getRolaeName = "Admin";
let admin = Admin.getNameRole();
console.log(admin);
