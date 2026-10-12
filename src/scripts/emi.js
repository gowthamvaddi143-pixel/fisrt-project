
function handleAmountChange(){
    document.getElementById("txtAmount").value = document.getElementById("rangeAmount").value;
    CalculateClick();

} 


function handleYearsChange(){
    document.getElementById("txtYears").value = document.getElementById("rangeYears").value;
     CalculateClick();

    
} 


function handleRateChange(){
    document.getElementById("txtRate").value = document.getElementById("rangeRate").value;
     CalculateClick();

    
} 

function CalculateClick(){
    var P = parseInt(document.getElementById("txtAmount").value);
    var N = parseInt(document.getElementById("txtYears").value)*2;
    var R = parseFloat(document.getElementById("txtRate").value)/12/100;
    var EMI = P * R * (Math.pow(1+R,N)) /(Math.pow(1+R,N))-1;
    document.getElementById("lblEMI").innerHTML =EMI.toLocaleString('en-in',{style:"currency",currency:"INR",minimumFractionDigits:0,maximumFractionDigits:0})


}