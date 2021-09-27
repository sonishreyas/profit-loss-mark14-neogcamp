const initialPrice = document.querySelector("#initial-price");
const quantityStocks = document.querySelector("#no-stocks");
const currentPrice = document.querySelector("#current-price");
const checkButton = document.querySelector("#check-stock");
const output = document.querySelector("#output");


function calculateInvestedAmount()  {
    var invested = Number(initialPrice.value) * Number(quantityStocks.value);
    return invested;
}

function calculateCurrentValue()  {
    var currentvalue = Number(currentPrice.value) * Number(quantityStocks.value);
    return currentvalue;
}

function Percentage(a,b)   {
    return ((a-b)/a)*100
}

function calculateprofitloss()   {
    var currentvalue = calculateCurrentValue();
    var invested = calculateInvestedAmount();
    var message;
    if(invested > currentvalue) {
        message = "Whoops!! Your loss is "+ (invested-currentvalue) +" and loss Percentage is " + Percentage(invested,currentvalue).toFixed(2); 
        output.style.color = 'red';
    }   else if (invested < currentvalue)   {
        message = "Yay!! Your Profit is "+ (currentvalue-invested) +" and profit Percentage is " + Percentage(currentvalue,invested).toFixed(2);
        output.style.color = 'green';
    } else{
        message = "No pain No gain, and no gain no pain :)"
        output.style.color = 'white';
    }
    output.innerText = message;
}

function submitHandler()    {
    if(initialPrice.value != "" && quantityStocks.value != "" && currentPrice.value != ""){
        if(Number(initialPrice.value) >= 0 && Number(quantityStocks.value) >= 0 && Number(currentPrice.value) >= 0){       
            calculateprofitloss();
        }   else   {
            output.innerText = "Values cannot be negative";
        }
    }   else    {
        alert('Please fill out all Fields');
    }
        
}
checkButton.addEventListener("click",submitHandler);
