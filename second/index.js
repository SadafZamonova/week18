let errors = [];

let button = document.querySelector("#button");
button.addEventListener(`click`, function () {


        errors = [];
        let inputs = document.querySelectorAll("input");
        for (let input of inputs) {
            checkValidity(input);
        }
        document.querySelector("#errorMessage").innerHTML = errors.join(". <br>");

    }

)




function checkValidity(input) {
    let validity = input.validity;

   
    if (validity.valueMissing) {
        errors.push("Поле " + input.placeholder + " не заполнено");
    }


    if (validity.patternMismatch) {
        errors.push("Неверный фотмат заполнения");
    }

    if (validity.tooLong) {
        let max = getAttributeValue(input, "max");
        errors.push("Максимальное значение не может быть больше чем 7" );
    }

    if (validity.tooShort) {
        let min = getAttributeValue(input, "min");
        errors.push("Минимальное значение не может быть меньше чем 3" );
    }
  
}
function getAttributeValue (input, type) {
    if (type==="min"){
        return input.minLenght;
    } else {
        return input.maxLenght;
    }
}



