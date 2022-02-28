
function compute()

{

var principal = document.getElementById("principal").value;
if(principal <1)
{alert("Enter a positive number");

}
else{
var rate = document.getElementById("rate").value;
var years = document.getElementById("years").value;

var year = new Date().getFullYear()+parseInt(years);
var interest = principal * years * rate /100;
 
      document.getElementById("result").innerText=interest;}
}

function updateRate() 
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
}
        