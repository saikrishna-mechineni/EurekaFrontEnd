function add() {
    let a = parseFloat(document.getElementById("num1").value);
    let b = parseFloat(document.getElementById("num2").value);

    if (isNaN(a) || isNaN(b)) {
        document.getElementById("output").innerText = "Please enter valid numbers!";
        return;
    }
    else{
        let sum = a + b;
        let mul = a * b;

        document.getElementById("output").innerText = `Add Result: ${sum}`;
        document.getElementById("output1").innerText = `Mul Result: ${mul}`;
    }

    
}
