const $input = document.querySelector("input");
const numKey = document.querySelectorAll(".num__key");
const buffer = [];
const clear = document.querySelector(".op_key[op=clear]");
const negative = document.querySelector(".op_key[op=negate]");
const eqKey = document.querySelector(".eq__key");

numKey.forEach(
  el => {
    el.onclick = () => $input.value = $input.value !== "0" ? $input.value + el.innerText : el.innerText;
  }
);

const opCallback = opName => () => {
  let currentVal = parseFloat($input.value);
  if (opName === "percent") {
    currentVal *= 0.01;
    $input.value = currentVal;
  }
  else {
    if (buffer && buffer.length) {
      buffer.push({ value: currentVal });

      const result = evaluate(buffer);

      buffer.push({ value: result });
      buffer.push({ value: opName });

      $input.value = "";
    }
    else {
      buffer.push({ value: currentVal });
      buffer.push({ value: opName });
      $input.value = "";
    }
  }
}

const evaluate = buffer => {
  const secondOperand = buffer.pop().value;
  const operator = buffer.pop().value;
  const firstOperand = buffer.pop().value;

  switch (operator) {
    case "add":
      return firstOperand + secondOperand;
      break;
    case "subtract":
      return firstOperand - secondOperand;
      break;
    case "multiply":
      return firstOperand * secondOperand;
      break;
    case "divide":
      return firstOperand / secondOperand;
      break;
    default:
      return secondOperand;
  }
}

for (const opName of ["add", "subtract", "multiply", "divide", "percent"]) {
  document.querySelector(`.op_key[op=${opName}]`).onclick =
    opCallback(opName);
}

eqKey.onclick =
  () => {
    if (buffer && buffer.length) {
      buffer.push({ value: parseFloat($input.value) });
      $input.value = evaluate(buffer);
    }
  }

clear.onclick =
  () => {
    $input.value = 0;
    buffer.length = 0;
  }

negative.onclick =
  () => $input.value = -parseFloat($input.value);