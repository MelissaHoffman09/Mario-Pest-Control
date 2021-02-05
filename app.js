const form = document.getElementById("form1");

function costOfBaddie(num1, num2) {
    return (num1 * num2);
}

function totalCost(e){
    e.preventDefault();

    let numberOfGoombas = costOfBaddie(form.goomba.value, 5);
    let numberOfBobombs = costOfBaddie(form.bobomb.value, 7);
    let numberOfCheepcheeps = costOfBaddie(form.cheepCheep.value, 11);

    let result = (numberOfGoombas + numberOfBobombs + numberOfCheepcheeps);

    document.getElementById("totalCost").textContent = `Total cost = ${result} coins`;
}

form.addEventListener("submit", totalCost);

