//creating ne object for a person with firstName,LastName & age

let person = {
    firstName: `Chandler`,
    lastName: `Bong`,
    age: 35,
    likes: [`making jokes`, `can i be any weirder`, `basketball`]
}

//using dot notation access the firstName

console.log(person.firstName)

//using bracket notation access the lastName

console.log(person[`lastName`])

//using bracket notation access 2nd like

console.log(person[`likes`][1])

//Object Deconstructing

let meal = {
    appetizer: 'chips & salsa',
    entree: 'chille relleno',
    dessert: 'churros',
    drink: 'horchata'
}

//using object destructuring, destructure the dessert property off of the meal object6

//let {dessert} = meal
//let dessert = meal.dessert //problem with this is that if I were to want to access other things I would have to destructure each item separately 

let { dessert, drink } = meal
console.log(dessert, drink)

console.log(`${dessert} goes well with ${drink}`)

//lets destructure the remaining items in the same 

let { appetizer, entree } = meal;

console.log(`${appetizer} goes well with ${entree}`)

//lets destructure the drink and rename it

let { drink: amazingDrink } = meal
console.log(amazingDrink)
//console.log(drink)

//looping using a for-in loop

// lets loop over person object and console.log all the keys

for (key in person) {
    console.log(person[key])
}


//add properties

//lets add a job key to the person object with a value of choice using dot notation
person.job = `Dancer`

// lets add pets (array) using bracket notation

person[`pets`] = [`snake`, `tarantula`]
console.log(person)

//delete properties

let teams = {
    teamOne: [`ryan`, `patrick`, `harry`, `haywood`, `dj`],
    teamTwo: [`jillian`, `emily`, `kellie`, `devin`, `devin`],
    teamThree: [`hamzah`, `isha`, `teryn`, `rose`, `lana`],
}

//delete teamTwo

delete teams.teamTwo

//console.log(teams)

//Classes
//lets add a greeting method/function to our class to greet the user from the dog

class Dog {
    constructor(name, breed, age) {
        this.name = name
        this.breed = breed
        this.age = age
    }

    greeting() {
        console.log(`Hi, my name is ${this.name} and i am a ${this.age} year old ${this.breed}`)
    }
}

let lassie = new Dog(`lassie`, `collie`, 7)

console.log(lassie)

let beethoven = new Dog(`Beethoven`, `st.bernard`, 2)

console.log(beethoven)

lassie.greeting()
beethoven.greeting()


//now we can loop over our instance of dog

for (key in lassie) {
    console.log(lassie[key])
}

//extending classes 

class Puppy extends Dog {
    constructor(name, breed, age, trainingLevel) {
        super(name, breed, age)

        this.trainingLevel = trainingLevel
    }

    levelUp(num) {
        this.trainingLevel = num
    }
}

let scrappyDoo = new Puppy(`scrappy`, `great-dane`, 1, 3)

console.log(scrappyDoo)

scrappyDoo.greeting()
scrappyDoo.levelUp(5)
console.log(scrappyDoo)