class User{
    constructor(username){
        this.username = username
    }
    printify(){
        console.log(`Username: ${this.username}`);
    }

    static createId (){
        return `123`
    }
}

const hammad = new User("Hammad")
// hammad.createId()

class Teacher extends User{
    constructor(username, email){
        super(username)
        this.email = email
    }
}

const iphone = new Teacher("Hammad", 'hammad.com')
// iphone.printify()


