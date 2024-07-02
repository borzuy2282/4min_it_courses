//creating object
let user = {
    name: "Volodymyr",
    age: 46,
    city: "Kriviy rig"
}

console.log(user.age)

//changing attribute
user.city = "Kyiv"
console.log(user.city)

user.work = "President"

//adding parameters
console.log(user.work)

console.log(user)

//deleting attribute
delete user.age

console.log(user)

let user2 = {}

//copying
for (let userKey in user) {
    user2[userKey] = user[userKey]
}

console.log(user2)


let user3 = {
    name: "Volodymyr",
    surname: "Zeleboba",
    age: 46,
    city: "Kriviy rig",

    //functions in object
    fullname(){
        return `Fullname is: ${this.name} ${this.surname}`;
    }
}

console.log(user3.fullname())

let codes = {
    "49": "Germany",
    "41": "Switzerland",
    "48": "Poland",
    "1": "USA",
    "44": "UK"
}

//prints sorted
for (let code in codes) {
    console.log(codes[code])
}

let menu = {
    first: 200,
    second: 150,
    title: 'My menu'
}

console.log(menu);
const multiply = (obj) => {
    for (const objKey in obj) {
        if(typeof obj[objKey] === 'number'){
            obj[objKey] *= 2
        }
    }
}

multiply(menu)
console.log(menu)



//task 1
let user4 = {}
console.log(user4)
user4.name = "Іван"
console.log(user4)
user4.surname = "Сміт"
console.log(user4)
user4.name = "Петро"
console.log(user4)
delete user4.name
console.log(user4)

//task 2
const findKeyByValue = (obj, key) => obj[key] === undefined ? undefined : obj[key];

user5 = {
    name: "bot"
}
console.log(findKeyByValue(user5, "name"))
console.log(findKeyByValue(user5, "sname"))


//task 3

let good = {
    title: "Apple",
    price: 200,
    quantity: 13,

    allPrice(){
        return `Price for all goods named ${this.title} is ${this.price * this.quantity}`
    }
}

console.log(good.allPrice())


function User(name){
    this.name = name;
    this.isAdmin = false;
}

let user6 = new User("Jack")


let id = Symbol("id")
let id2 = Symbol("id")
console.log(id === id2)
console.log(id)


//task 2.2
let car = {
    title: "Bugatti",
    model: "Veyron",
    year: "2010"
}

function isElder5Year(obj){
    return 2024 - obj.year > 5;
}

console.log(isElder5Year(car))

//task 2.3
let book = {
    title: "Fedko-halamydnyk",
    author: "Volodymyr Vynnychenko",
    yearPublished: 1912,

    goodFormat(){
        console.log(`Book is ${this.title}, written by ${this.author} and was firstly published ${this.yearPublished}`)
    }
}

book.goodFormat()

//task 3.1
let userWithFriends = {
    name: "Borov",
    age: 19,
    friends: [
        {name: "Dima", age: 19},
        {name: "Tymek", age: 19},
        {name: "Baraban", age: 400},
        {name: "CanalPlusPolskaSA", age: 30}
    ],

    longestFriend(){
        if (this.friends.length === 0){
            return undefined
        }
        let longestFriend = this.friends[0]
        if (this.friends.length > 1) {
            for (let i = 1; i < this.friends.length; i++) {
                if (this.friends[i].name.length > longestFriend.name.length) {
                    longestFriend = this.friends[i]
                }
            }
        }
        return longestFriend
    }
}
console.log(userWithFriends.longestFriend())