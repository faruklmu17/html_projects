/*//first we will display which radio button has been selected
let dPrice = 0;
let foodPrices = 0;
let dictionary = {
    "Coke": 1.5,
    "Cookies": 2,
    "Fruits": 2,
    "Nuts": 2,
    "Chips": 4,
    "Cookies": 3,
    "Fruits": 2,
    "Nuts": 1
};

function drinkPriceCalculation() {
    const selectedDrink = document.querySelector('input[name="drinks"]:checked');
    if (selectedDrink) {
        const drinkValue = selectedDrink.value;
        document.getElementById('drinkLabel').innerText = `Selected Drink: ${drinkValue}`;
        dPrice.innerText = `Price $ ${dictionary[drinkValue]}`;
        
    }
} 
function foodPriceCalculation() {
    const selectedDrink = document.querySelector('input[name="food"]:checked');
    if (selectedDrink) {
        const foodValue = selectedDrink.value;
        document.getElementById('snackLabel').innerText = `Selected Snack: ${foodValue}`;
        foodPrices.innerText = `Price $ ${dictionary[foodValue]}`;
    }
}
*/

//first we will display which radio button has been selected
let drinkPrice = 0;
const drinkPrices = {
    Coke: 1.5,
    Pepsi: 1.5,
    Fanta: 1,
    'Dr Pepper': 3
};
let foodPrice = 0;
const foodPrices = {
    Chips: 4,
    Cookies: 3,
    Fruits: 2,
    Nuts: 1
};

function totalPrice() { 
    let totalPrice = drinkPrice + foodPrice; 
    document.getElementById('totalPrice').innerText = `Total Price $${totalPrice.toFixed(2)}`;
}

function foodPriceCalculation() {
    const selectedFood = document.querySelector('input[name="food"]:checked');
    if (selectedFood) {
        const foodValue = selectedFood.value;
        document.getElementById('snackLabel').innerText = `Selected Snack: ${foodValue}`;
        /*if (foodValue === 'Chips') {
            foodPrice = foodPrices['Chips'];
        } else if (foodValue === 'Cookies') {
            foodPrice = foodPrices['Cookies'];
        } else if (foodValue === 'Fruits') {
            foodPrice = foodPrices['Fruits'];
        } else if (foodValue === 'Nuts') {
            foodPrice = foodPrices['Nuts'];
        }*/
        foodPrice = foodPrices[foodValue]
        document.getElementById('sprice').innerText = `Price $${foodPrice.toFixed(2)}`;
        totalPrice()
    }
}
function drinkPriceCalculation() {
    const selectedDrink = document.querySelector('input[name="drinks"]:checked');
    
    if (selectedDrink) {
        const drinkValue = selectedDrink.value;
        document.getElementById('drinkLabel').innerText = `Selected Drink: ${drinkValue}`;
        /*if (drinkValue === 'Coke') {
            drinkPrice = drinkPrices['Coke'];
        } else if (drinkValue === 'Pepsi') {
            drinkPrice = drinkPrices['Pepsi'];
        } else if (drinkValue === 'Fanta') {
            drinkPrice = drinkPrices['Fanta'];
        } else if (drinkValue === 'Dr Pepper') {
            drinkPrice = drinkPrices['Dr Pepper'];
        }*/
            drinkPrice = drinkPrices[drinkValue]
        document.getElementById('dprice').innerText = `Price $${drinkPrice.toFixed(2)}`;
    }
}


