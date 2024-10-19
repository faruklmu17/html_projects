let mealCost = 0;
let share = 0;

function calculateShare() {
    const s = parseInt(document.querySelector('input[name="friends"]:checked').value);
    mealCost = parseInt(document.getElementById('mealCost').value);
    share = s + 1;

    let result = document.getElementById('result');
    result.innerText = `$${mealCost/share} per person (including you)`;
    
    if ((mealCost/share) === 'NaN' || (mealCost/share) == 0 || !share) {
        alert("No money is required to be distributed!")
        result.innerText = "No amount is given";
    }
    document.getElementById('paymentSection').style.display = 'block';
    const friends = parseInt(document.querySelector('input[name="currentUserfullAmount"]:checked').value);
}

function hidden() {

}