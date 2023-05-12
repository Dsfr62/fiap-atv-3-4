let form = document.querySelector("form")

form.addEventListener("submit", (event) => {
    event.preventDefault()
    const submitedButton = event.submitter.id
    const first_number = Number(document.getElementById("first-number").value)
    const second_number = Number(document.getElementById("second-number").value)

    let resultado;

    if(submitedButton == "adicao") {
        resultado = `Resultado da adição: ${first_number + second_number}`
    } else if(submitedButton == "subtracao") {
        resultado = `Resultado da subtração ${first_number - second_number}`
    } else if(submitedButton == "multiplicacao") {
        resultado = `Resultado da multiplicação: ${first_number * second_number}`
    } else if(submitedButton == "divisao") {
        if(second_number == 0) {
            alert("Não é possível efetuar a divisão por zero")
            resultado = ""
        } else {
            resultado = `Resultado da divisão: ${first_number / second_number}`
        }
    }

    document.getElementById("resultado").innerHTML = resultado
})