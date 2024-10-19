// // Variables
// const submit1 = document.getElementById('submit1');
// const friend1 = document.getElementById('friend1');
// const friend2 = document.getElementById('friend2');
// const friend3 = document.getElementById('friend3');
// const totalCost = document.getElementById('totalCost');
// let cashPerFriend = 0;
// const totalCostValue = parseFloat(totalCost.value).toFixed(2);
// const friends = parseInt(document.querySelector('input[name="friends"]:checked').value);


// function submit1() {
//     cashPerFriend = totalCost/friends;
//     switch ()
// }

//Reading values from input
function submit1() {
    const restaurants = document.getElementById('nameRestaurant').value;
    const totalCost = parseInt(document.getElementById('totalCost').value);
    const friends = parseInt(document.querySelector('input[name="friends"]:checked').value);
    let perPerson = 0;
    const perPersonElement = document.getElementById('perPerson');  
    perPerson = totalCost/friends;
    perPersonElement.innerHTML = `$${perPerson.toFixed(2)} per person`;
}



