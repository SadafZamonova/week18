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


let errors = [];

function checkValidity(input) {
    let validity = input.validity;
    if (validity.valueMissing) {
        errors.push("Поле" + input.placeholder + "не заполнено");
    }


    if (validity.patternMismatch) {
        errors.push("Неверный фотмат заполнения");
    }

    if (validity.rangeOverflow) {
        let max = getAttributeValue(input, "max");
        errors.push("Максимальное значение не может быть больше чем" + max);
    }

    if (validity.rangeOverflow) {
        let min = getAttributeValue(input, "min");
        errors.push("Минимальное значение не может быть меньше чем" + min);
    }
}



