let getRandom = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let fistCard = getRandom(2, 11);
let secondCard = getRandom(2, 11);
let sum = fistCard + secondCard;
console.log(fistCard, secondCard, ' ', sum)


let result = (sum) => {
    if (sum < 21) {
        console.log("Do you want to draw a new card?");
        console.log(getRandom(2, 11));
        sum += getRandom(2, 11);
        console.log(sum);
        result(sum);
    } else if (sum === 21) {
        console.log("Wohoo! You've got blackjack")
    } else {
        console.log("You're out of the game!")
    }
}

result(sum);