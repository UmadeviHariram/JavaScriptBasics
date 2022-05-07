let calculate = (operation) => {

    let num1 = document.getElementById("num1-el");
    let num2 = document.getElementById("num2-el");
    let result = document.getElementById("result-el");
    let operator = document.getElementById("operator-el");

    console.log(num1)

    switch (operation) {
        case 'Add':
            result.textContent = parseInt(num1.textContent) + parseInt(num2.textContent);
            operator.textContent = " + "
            break;
        case 'Multiply':
            result.textContent = num1.textContent * num2.textContent;
            operator.textContent = " * "
            break;
        case 'Divide':
            result.textContent = num1.textContent / num2.textContent;
            operator.textContent = " / "
            break;
        case 'Subtract':
            result.textContent = num1.textContent - num2.textContent;
            operator.textContent = " - "
            break;
        default:
            break;

    }

}