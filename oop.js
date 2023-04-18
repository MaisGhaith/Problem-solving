/*
  Class
  Inheritance
*/
class User {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }
    satHello(name, email) {
        return `hello ${this.name}`;
    }
    showEmail(name, email) {
        return `your Email is${this.email} `;
    }



}

class Admin extends User {
    constructor(name, email) {
        super(name, email); // resereved keyword we can access to parent class constructor 
    }
    adminMsg() {
        return `you are admin`
    }
}


let admin1 = new Admin("mais", "osama@gmail.com");
console.log(admin1.satHello())