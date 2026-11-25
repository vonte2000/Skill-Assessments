const countDown = () => {
    for (let i = 5; i > 0; i--) {
        console.log(i)
    }
}
countDown()

const countUp = (start, end) => {
    for (let i = start; i<= end; i++) {
        console.log(i)
    }
}

const isLong = (word) => {
    if (word.length >= 10) {
        return true 
    } else {
        return false
    }
}
console.log(isLong("blue"))

const whatWaterState = (temperature) => {
    if (temperature <= 32) {
        console.log("solid") 
    } 
    if (temperature > 32 && temperature < 212) {
        console.log("liquid") 
    }  
    if (temperature >= 212) {
        console.log("gas")
    }
}
whatWaterState(22)

const sandwiches = [
    {type: "Italian", calories: 1000, cost: 7.69, isVegetarian: false},
    {type: "Veggie", calories: 500, cost: 5.50, isVegetarian: true},
    {type: "Meatball", calories: 900, cost: 8.25, isVegetarian: false},
    {type: "Jackfruit", calories: 650, cost: 8.50, isVegetarian: true}
]

const makeSandwich = (type, calories, cost, isVegetarian) => {
    const sandwich = {type, calories, cost, isVegetarian} //creates new sandwich object
    sandwiches.push(sandwich) //adds new object to the end of array
}
makeSandwich("ham & cheese", 800, 8.50, false)
//console.log(sandwiches) 

const findVegetarianSandwich = (sandwiches) => {
    return sandwiches.filter((sandwich) => sandwich.isVegetarian === true)
}
console.log(findVegetarianSandwich(sandwiches))

const findCheapestSandwich = (sandwiches) => {
    const cheapestSandwich = Math.min(...sandwiches.map(sandwich => sandwich.cost))
    return sandwiches.find(sandwich => sandwich.cost === cheapestSandwich).type
}
console.log(findCheapestSandwich(sandwiches));