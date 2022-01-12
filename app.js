const initialPrice = document.querySelector("#initial-price");
const quantityStocks = document.querySelector("#no-stocks");
const currentPrice = document.querySelector("#current-price");
const checkButton = document.querySelector("#check-stock");
const output = document.querySelector("#output");

const calculateInvestedAmount = () =>
  Number(initialPrice.value) * Number(quantityStocks.value);

const calculateCurrentValue = () =>
  Number(currentPrice.value) * Number(quantityStocks.value);

const Percentage = (a, b) => ((a - b) / a) * 100;

const calculateprofitloss = () => {
  const currentvalue = calculateCurrentValue();
  const invested = calculateInvestedAmount();
  let message;
  if (invested > currentvalue) {
    message = `Whoops!! Your loss is ${
      invested - currentvalue
    } and loss Percentage is ${Percentage(invested, currentvalue).toFixed(2)}`;
    output.style.color = "red";
  } else if (invested < currentvalue) {
    message = `Yay!! Your Profit is ${
      currentvalue - invested
    } and profit Percentage is ${Percentage(currentvalue, invested).toFixed(
      2
    )}`;
    output.style.color = "green";
  } else {
    message = `No pain No gain, and no gain no pain :)`;
    output.style.color = "white";
  }
  output.innerText = message;
};

const submitHandler = () => {
  if (
    initialPrice.value != "" &&
    quantityStocks.value != "" &&
    currentPrice.value != ""
  ) {
    if (
      Number(initialPrice.value) >= 0 &&
      Number(quantityStocks.value) >= 0 &&
      Number(currentPrice.value) >= 0
    ) {
      calculateprofitloss();
    } else {
      output.style.color = "white";
      output.innerText = "Values cannot be negative";
    }
  } else {
    alert("Please fill out all Fields");
  }
};
checkButton.addEventListener("click", submitHandler);
